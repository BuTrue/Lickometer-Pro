中文 | [English](README.en.md) | [日本語](README.ja.md) | [Français](README.fr.md)

<div align="center">

<h1>Lickometer Pro</h1>

**啮齿动物舔舐微观结构分析系统**

![版本](https://img.shields.io/badge/version-1.7.0-blue.svg)
![平台](https://img.shields.io/badge/platform-Windows%2010%2F11%20x64-lightgrey.svg)
![许可证](https://img.shields.io/badge/license-MIT-yellow.svg)
[![中文](https://img.shields.io/badge/lang-中文-red.svg)](README.md)
[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.en.md)
[![日本語](https://img.shields.io/badge/lang-日本語-green.svg)](README.ja.md)
[![Français](https://img.shields.io/badge/lang-Français-informational.svg)](README.fr.md)

</div>

<div align="center">
<img src="docs/images/screenshot-labchart.png" alt="Lickometer Pro 主界面：LabChart 多通道数据与双瓶分析" width="100%">
</div>

---

## 为什么选择 Lickometer Pro

| 对象 | 能力 |
|---|---|
| 双瓶偏好实验 | 同一段记录按正极性 / 负极性拆分两个水瓶，自动给出偏好率、偏好指数与换瓶统计 |
| 长时程 LabChart 记录 | 原生流式读取多日、多通道、多 record 的 `.adicht`，恒定内存，不必整文件载入 |
| 一整批动物 | 文件夹批量分析，统一参数快照，逐文件进度与 ETA，结果合并为单个多 Sheet 工作簿 |
| 论文图表 | 内置 Weibull ILI 拟合（Davis 1998）与 14 类出版级图表，一键导出 Excel 与图片 |

---

## 功能总览

### 数据读取

| 功能 | 说明 | 备注 |
|---|---|---|
| TXT / CSV / XLSX | 读取「时间 + 信号」两列记录 | 自动嗅探分隔符 |
| LabChart `.adicht` | 多日、多通道、多 record 原生导入 | 经官方 ADInstruments SDK（adi-reader） |
| 通道角色设置 | 每个通道设为「饮水统计 / 辅助展示 / 忽略」 | 辅助通道只显示波形，不参与统计 |
| 波形预览与导航 | 整段密度缩略图，点击/拖动跳转 | 峰计数统计整个文件，缩放不影响 |

### 核心分析

| 功能 | 说明 | 备注 |
|---|---|---|
| 双瓶 / 单瓶分析 | 正极性峰 = 第一水瓶，负极性峰 = 第二水瓶 | 默认双瓶模式，单瓶记录可照常处理 |
| 峰检测 | Prominence、Min Interval 可调 | 默认 0.005 / 0.05 s |
| 爆发（Burst）检测 | Burst Gap、Min Burst Count 可调 | 默认 1.0 s / 2 次舔舐 |
| 餐次（Meal）分析 | 按 Meal Gap 划分完整摄食片段 | GUI 固定 300 s，CLI/MCP 可调 |
| 爆发内频率 | 舔舐频率 = 1 / 中位 ILI | Excel 中标注为「舔舐频率（Hz）」 |
| Weibull 拟合 | 对舔舐间隔（ILI）分布建模 | Davis (1998) 方法 |
| ILI 高斯拟合 | 高斯混合、分布峰值与区间占比 | CLI `--with-ili-gaussian` 或 MCP `compute_ili_gaussian` |
| 排除长舔 | 按持续时长阈值剔除长舔并前后对比 | 对话框默认 0.2 s |
| 统计比较 | 两瓶用 Mann–Whitney U（统计分析对话框）；跨文件 / 跨分组另有 Kruskal–Wallis + Dunn 事后，经 CLI `--statistical` 或 MCP `compare_groups` | GUI 对话框为双瓶两两比较 |

### AI 模型

| 功能 | 说明 | 备注 |
|---|---|---|
| Lick 分类推理 | 内置模型过滤伪峰（ONNX 推理，损坏自动回退 `.pkl`） | 「启用 AI 识别」勾选框，默认勾选 |
| 波形手动标注 | 左键点峰 = 有效舔舐，右键点峰 = 非舔舐 | 标注自动写入本地缓存 |
| 一键重训 | 缓存 + 原始波形多尺度增强重训，自动导出 ONNX 并原子替换 | 使用全部 CPU 核心 |
| 模型管理 | 查看模型格式/大小/样本数，恢复上一版 `.bak`，清理无效缓存 | 「模型设置…」入口 |
| 模型独立更新 | AI 模型可与软件分离、单独推送更新 | 见 `update/manifest.json` 的 model 字段 |

### 可视化

| 功能 | 说明 | 备注 |
|---|---|---|
| 14 类图表 | 三组：时间序列 / 分布与热图 / 爆发与关系 | 内嵌「图表」工作区，不弹独立窗口 |
| 交互式波形 | 滚轮平移、Ctrl+滚轮缩放、Shift+滚轮调幅度 | 缩小用 min/max 包络保峰，放大画真实采样点 |
| KPI 摘要卡 | 总舔舐次数、爆发次数、平均爆发大小、摄入量、记录时长 | 「概览」工作区顶部 |
| 栅格与热图 | 栅格图、舔舐栅格、会话热图、活动热图 | 分布与热图分组 |

### 导出

| 功能 | 说明 | 备注 |
|---|---|---|
| Excel 多工作表 | 概览 / 指标 / 每分钟统计 / 偏好 四张表 | 「导出 Excel（分析数据）」 |
| 综合导出 | 含更多明细的综合工作簿 | 「数据」工作区按钮 |
| 图表导出 | 保存当前图表图片 | 「数据导出」→ 导出当前图表 |
| 批量输出 | 每文件独立 `.xlsx` 或合并单个多 Sheet 工作簿 | Batch 2.0 批量处理窗口 |

### 自动化接口

| 功能 | 说明 | 备注 |
|---|---|---|
| CLI | `analyze` / `batch` / `compare` 三个子命令，默认 JSON 输出 | 见下文「命令行与 MCP」 |
| MCP 服务器 | stdio 协议，向 agent 暴露 10 个分析工具 | `python mcp_server.py` |
| Skill 包 | `skills/lickometer-pro/SKILL.md` 记录调用契约 | CLI / MCP / GUI 共用同一分析服务 |

---

## 界面预览

| 「概览」工作区：KPI 与信号曲线 | 「图表」工作区：分组图表内嵌显示 |
|---|---|
| ![概览工作区](docs/images/screenshot-overview.png) | ![图表工作区](docs/images/screenshot-plots.png) |
| 累积舔舐曲线：随时间累计的舔舐次数 | 爆发概率图：burst 规模与概率分布 |
| ![累积曲线](docs/images/plot-cumulative.png) | ![爆发概率](docs/images/plot-burst-probability.png) |
| 统计对话框：跨文件均值 / SEM / 中位数比较 | AI 训练窗口：波形标注与重训 |
| ![统计对话框](docs/images/dialog-statistics.png) | ![训练对话框](docs/images/dialog-trainer.png) |

---

## 安装

### 系统要求

| 项目 | 最低 | 推荐 |
|---|---|---|
| 操作系统 | Windows 10 x64 | Windows 11 x64 |
| 内存 | 4 GB | 8 GB |
| 磁盘 | 1 GB 可用空间 | 2 GB |
| 显示 | 1280 × 720 | 1920 × 1080 |

### 方式一：下载安装包（推荐）

1. 打开 [Releases 最新版本](https://github.com/BuTrue/Lickometer-Pro/releases/latest)。
2. 下载 `LickometerPro_Setup_<版本>.exe`（Windows x64）。
3. 双击运行：**安装向导为中文**，依次点击「下一步」即可。
4. 安装为当前用户级别，**无需管理员权限**，不弹 UAC。
5. 已安装旧版本时可直接**覆盖升级**，用户数据（`%APPDATA%\LickometerPro`）不受影响。

详细说明见 [INSTALL.md](INSTALL.md)。

### 方式二：源码

本仓库为发布仓库，仅提供安装包、文档与更新清单，**源码不公开**。

---

## 快速开始

1. **打开数据** — 点击顶部「打开数据」（或 `Ctrl+O`），支持 `.txt` / `.csv` / `.xlsx` / `.adicht`。
2. **通道设置** — 选择 LabChart 文件后，在通道角色表中把每个通道设为「饮水统计 / 辅助展示 / 忽略」，右下角预览波形。
3. **一键分析** — 点击顶部「一键分析」（或 `Ctrl+R`），状态栏显示进度，完成后出现 KPI、波形与累积曲线。
4. **图表** — 切换到「图表」工作区，在「时间序列 / 分布与热图 / 爆发与关系」三组中选择 14 类图表。
5. **导出 Excel** — 点击「数据导出」→「导出 Excel（分析数据）」，得到多工作表结果，可直接用于统计与作图。

---

## 软件更新

- **启动自动检查**：软件启动后自动比对最新版本。
- **手动检查**：右上角「⋯」→「检查更新…」随时手动触发。
- **自动覆盖安装**：发现新版本后点击「立即下载」，下载完成自动校验 SHA-256，校验通过后静默覆盖安装并自动重启。
- **AI 模型独立更新**：舔舐识别模型可与软件本体分离推送，无需重装软件。
- 更新元数据见 [`update/manifest.json`](update/manifest.json)。

---

## 命令行与 MCP

**CLI**（适合脚本与批处理）：

```bash
python cli.py analyze data.txt --single --polarity pos --format table -o result.json
python cli.py batch a.txt b.txt c.txt                # JSON 数组
python cli.py compare a.txt b.txt c.txt --bottle b1  # mean/SEM/median
```

**MCP 服务器**（stdio，接入 agent 工作流）：运行 `python mcp_server.py` 并注册到 MCP 客户端，提供以下 10 个工具：

| 工具 | 说明 |
|---|---|
| `analyze_file` | 分析单个文件，返回完整统计 JSON |
| `batch_analyze` | 用相同参数批量分析多个文件，返回 JSON 数组 |
| `compare_files` | 跨文件汇总某水瓶/分组，返回各指标 mean/SEM/median/n |
| `compare_groups` | 多分组非参数统计比较（Kruskal–Wallis / Mann–Whitney U + Dunn 事后检验） |
| `compute_burst_details` | 每个 burst 的 start/end/duration/licks/ILI/peak rate |
| `exclude_long_licks` | 排除超长舔舐并重新分析，返回前后对比 |
| `compute_pca` | 多样本统计的 PCA + K-means 聚类 |
| `compute_activity_heatmap` | 时间分箱舔舐计数热图数据 |
| `compute_ili_gaussian` | ILI 高斯混合拟合、分布峰值与区间占比 |
| `get_info` | 返回软件版本与默认参数 |

CLI、MCP 与图形界面共用同一分析服务，结果一致。

---

## 常见问题

<details>
<summary>安装时提示「文件被占用」怎么办？</summary>

关闭正在运行的 Lickometer Pro 后重试；安装程序也会自动请求关闭应用。
</details>

<details>
<summary>杀毒软件 / SmartScreen 拦截安装包？</summary>

安装包未做代码签名，部分杀软会提示「未知发布者」。可选择「仍要运行」，或核对 Releases 页面公布的 SHA-256 后再放行。
</details>

<details>
<summary>启动后界面空白？</summary>

确认系统为 Windows 10 及以上 64 位；如仍异常，删除 `%APPDATA%\LickometerPro\config` 后重新启动。
</details>

<details>
<summary>分析结果里没有爆发（Burst）？</summary>

通常是 Min Burst 过高或 Burst Gap 过小：降低 Min Burst 或增大 Burst Gap 后重新分析。
</details>

<details>
<summary>Excel 导出失败？</summary>

多为目标文件已在 Excel 中打开或目录无写入权限：关闭该文件，或更换保存目录后重试。
</details>

<details>
<summary>AI 模型加载失败？</summary>

确认模型由当前版本训练生成；若 `.onnx` 文件损坏，删除后软件会自动回退到 `.pkl` 检查点。也可在「模型设置…」中恢复上一版或一键重训。
</details>

---

## 版本历史

完整变更记录见 [CHANGELOG.md](CHANGELOG.md)。

| 版本 | 日期 | 里程碑 |
|---|---|---|
| 1.7.0 | 2026-10-25 | 首个公开发行版：中文安装向导、自动检查更新与覆盖安装、AI 模型独立更新 |
| 1.5.0 | 2026-10-08 | 新增 CLI 与 MCP 无头接口、共享分析服务、Skill 包 |
| 1.4.0 | 2026-09-23 | 界面中文化、双瓶设为默认模式、LabChart 裁剪/导出对话框重设计、AI 训练支持 LabChart |

---

## 许可证与引用

本项目基于 [MIT License](LICENSE.txt) 开源发布。

如在研究中使用了 Lickometer Pro，请引用：

```bibtex
@software{lickometer_pro,
  author  = {{Lickometer Pro}},
  title   = {Lickometer Pro: 啮齿动物舔舐微观结构分析系统},
  version = {1.7.0},
  date    = {2026-10-25},
  url     = {https://github.com/BuTrue/Lickometer-Pro},
  license = {MIT}
}
```

Weibull ILI 拟合方法参考：Davis, J. D. (1998). *Appetite*, 31(3), 435-447（DOI: 10.1006/appe.1998.0167）。

---

<div align="center">

**本项目为研究工具，不用于临床诊断。**

</div>
