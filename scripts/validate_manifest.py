"""Validate update/manifest.json against the release repository state.

Run from the repository root (CI and local pre-push check):

    python scripts/validate_manifest.py

Checks, in order:

1. ``version`` is ``x.y.z``;
2. ``release-notes/v<version>.md`` exists;
3. the download URL and the manifest version agree (tag match);
4. sha256 / size formats are sane;
5. every model URL offered carries a matching sha256 field;
6. every docs/ asset referenced by the READMEs exists;
7. **no source code is staged for publication** — the release repository is
   documentation + installer metadata only, so files like ``*.py`` outside
   ``scripts/`` must never appear in it.

Network verification of the published asset (downloading it and hashing) is
skipped when the URL points at ``/releases/latest`` (pre-release state) — a
published tag URL is only checked with ``--check-asset`` to keep offline runs
fast.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "update" / "manifest.json"
SHA_RE = re.compile(r"^[0-9a-f]{64}$")
VERSION_RE = re.compile(r"^\d+\.\d+\.\d+$")


def check_manifest(manifest: dict, errors: list[str]) -> str:
    version = str(manifest.get("version", ""))
    if not VERSION_RE.match(version):
        errors.append(f"version 不是 x.y.z 形式：{version!r}")

    url = str(manifest.get("download_url_windows", ""))
    if not url.startswith("https://github.com/"):
        errors.append(f"下载地址必须是 GitHub Releases：{url!r}")
    else:
        tag = re.search(r"/download/(v[^/]+)/", url)
        if tag and VERSION_RE.match(version) and tag.group(1) != f"v{version}":
            errors.append(f"URL 标签 {tag.group(1)} 与 version {version} 不一致")

    digest = str(manifest.get("sha256", ""))
    if digest and not SHA_RE.match(digest):
        errors.append("sha256 必须是 64 位小写十六进制")
    size = manifest.get("size_bytes", 0)
    if not isinstance(size, int) or size < 0:
        errors.append(f"size_bytes 必须是非负整数：{size!r}")
    if bool(digest) != (size > 0):
        errors.append("sha256 与 size_bytes 必须同时填写或同时留空（发布前/后）")

    notes = Path(ROOT) / "release-notes" / f"v{version}.md"
    if not notes.is_file():
        errors.append(f"缺少发行说明文件：{notes.relative_to(ROOT)}")

    model = manifest.get("model") or {}
    for link_key, hash_key in (("pkl_url", "pkl_sha256"),
                               ("onnx_url", "onnx_sha256")):
        link = str(model.get(link_key, ""))
        if link and not SHA_RE.match(str(model.get(hash_key, ""))):
            errors.append(f"model.{link_key} 已提供但 model.{hash_key} 缺失或格式错误")
    return version


def check_docs_links(errors: list[str]) -> None:
    for readme in ROOT.glob("README*.md"):
        text = readme.read_text(encoding="utf-8")
        for match in re.finditer(r"\((docs/[^)#\s]+)", text):
            target = ROOT / match.group(1)
            if not target.exists():
                errors.append(f"{readme.name} 引用不存在的文件：{match.group(1)}")
        for match in re.finditer(r"(?:src|href)=\"(docs/[^\")\s]+)\"", text):
            target = ROOT / match.group(1)
            if not target.exists():
                errors.append(f"{readme.name} 引用不存在的文件：{match.group(1)}")


def check_no_source(errors: list[str]) -> None:
    """The release repository must not contain the product's source tree."""
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        relative = path.relative_to(ROOT).as_posix()
        if relative.startswith("scripts/"):
            continue
        if ".git" in path.parts:
            continue
        if path.suffix == ".py" and relative != "scripts/validate_manifest.py":
            errors.append(f"发行仓库不得包含源码文件：{relative}")
    forbidden_dirs = ("src", "tests", "benchmarks", "tools")
    for name in forbidden_dirs:
        if (ROOT / name).exists():
            errors.append(f"发行仓库不得包含源码目录：{name}/")


def check_asset(url: str, digest: str, errors: list[str]) -> None:
    if "/releases/download/" not in url:
        return
    try:
        with urllib.request.urlopen(url, timeout=300) as response:
            hasher = hashlib.sha256()
            while True:
                block = response.read(1 << 20)
                if not block:
                    break
                hasher.update(block)
        actual = hasher.hexdigest()
        if actual != digest:
            errors.append(f"资产 SHA-256 不符：清单 {digest}，实际 {actual}")
        else:
            print("asset digest verified")
    except Exception as exc:
        errors.append(f"无法下载资产校验：{exc}")


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check-asset", action="store_true",
                        help="下载清单指向的安装包并核对 SHA-256（需网络）")
    args = parser.parse_args(argv)

    if not MANIFEST.is_file():
        print(f"::error::缺少 {MANIFEST.relative_to(ROOT)}")
        return 1
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))

    errors: list[str] = []
    version = check_manifest(manifest, errors)
    check_docs_links(errors)
    check_no_source(errors)

    if args.check_asset:
        digest = str(manifest.get("sha256", ""))
        url = str(manifest.get("download_url_windows", ""))
        if digest:
            check_asset(url, digest, errors)
        else:
            errors.append("--check-asset 需要清单已填写 sha256（即已发布状态）")

    if errors:
        print("::error::发布元数据校验失败")
        for line in errors:
            print(" -", line)
        return 1
    print(f"清单校验通过：v{version}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
