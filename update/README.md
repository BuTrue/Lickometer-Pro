# 更新清单

本目录的 `manifest.json` 是 Lickometer Pro 的自动更新数据源。

| 字段 | 说明 |
|---|---|
| `version` | 最新软件版本号（与安装包一致） |
| `download_url_windows` | 安装包下载地址（GitHub Release 资产） |
| `sha256` | 安装包 SHA-256，客户端下载后强制校验 |
| `min_required_version` | 低于此版本时必须完整重装 |
| `release_notes_zh` / `release_notes_en` | 更新窗口展示的说明 |
| `model` | AI 模型更新通道（`version` / `pkl_url` / `pkl_sha256` / `onnx_url` / `onnx_sha256`） |

客户端默认读取：

```
https://raw.githubusercontent.com/BuTrue/Lickometer-Pro/main/update/manifest.json
```

可用环境变量 `LICKOMETER_UPDATE_URL` 指向镜像。清单由
`tools/publish_release.py` 自动生成，请勿手工改版本号。
