<p align="center"><a href="README.md">中文</a> | <b>English</b> | <a href="README.ja.md">日本語</a> | <a href="README.fr.md">Français</a></p>

<div align="center">

# Lickometer Pro

**AI Enhanced Edition**

![Version](https://img.shields.io/badge/version-1.7.0-blue.svg)
[![Python](https://img.shields.io/badge/python-3.10%20%7C%203.12-brightgreen.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE.txt)
[![Platform](https://img.shields.io/badge/platform-Windows-lightgrey.svg)]()

*Professional Microstructure Analysis for Rodent Licking Behavior*

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [System Requirements](#system-requirements)
- [Installation](#installation)
  - [For End Users (Pre-built Installer)](#for-end-users-pre-built-installer)
  - [Automatic Updates](#automatic-updates)
  - [For Development](#for-development)
- [Quick Start](#quick-start)
- [Usage](#usage)
  - [Launch Application](#launch-application)
  - [Basic Workflow](#basic-workflow)
  - [Batch Processing](#batch-processing)
  - [LabChart Folder Batch Reports](#labchart-folder-batch-reports)
  - [AI Model Training](#ai-model-training)
  - [Agent / Automation Interfaces (CLI, MCP, Skill)](#agent--automation-interfaces-cli-mcp-skill)
- [Building from Source](#building-from-source)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Citation & Acknowledgments](#citation--acknowledgments)

---

## Overview

**Lickometer Pro** is a professional neuroscience application for the comprehensive microstructural analysis of rodent licking behaviour. Built in Python on a **PySide6 (Qt)** desktop interface, it gives researchers a complete pipeline: batch-processing lickometer recordings, detecting bursts, characterising meal structure, and visualising licking microstructure as publication-ready figures. The application ships with a fully Chinese user interface and a Chinese setup wizard.

The software implements established methodologies from the behavioural-neuroscience literature, including **Weibull distribution fitting** of the inter-lick interval (ILI) as described by Davis (1998), and burst-detection algorithms inspired by the McCutcheon Lab's `trompy/lickcalc` framework.

**Why Lickometer Pro?**
- Analyse large datasets efficiently with folder-level batch processing
- Generate publication-quality visualisations automatically
- Apply validated neuroscience algorithms with configurable parameters
- Export structured, multi-sheet Excel reports for downstream statistics
- Train and run an AI model for automated lick-pattern classification

---

## Key Features

### Data Processing
- **Multi-file Batch Processing** — analyse hundreds of data files at once with progress tracking
- **Two-Bottle Preference Analysis** — compare liquid intake across channels using lick polarity (B1 / B2) with automated statistics
- **AI-Based Lick Classification** — a machine-learning classifier for intelligent lick-pattern recognition
- **Native LabChart (`.adicht`) Support** — direct import of multi-day, multi-channel, multi-record recordings through the official ADInstruments SDK, on a gap-aware global time axis

### Burst & Meal Analysis
- **Burst Detection** — configurable inter-lick interval (ILI) thresholds with adjustable parameters
- **Meal Structure Analysis** — identify and characterise complete drinking/feeding bouts with configurable gap thresholds
- **Intraburst Frequency** — precise measurement of licking rate within a burst

### Statistical Analysis
- **Weibull Distribution Fitting** — model ILI distributions (Davis 1998 methodology)
- **Summary Statistics** — comprehensive statistical reports for every metric
- **Day/Night Intake Analysis** — circadian analysis with 24-hour activity profiles

### Visualization
- **Raster Plots** — temporal visualisation of licking events
- **Cumulative Lick Curves** — running-accumulation plots
- **Heat Maps** — session-wide activity patterns
- **Inline Plots** — figures render inside the main window; parameter changes take effect on the next analysis run (plots do not update live)

### User Experience
- **Token-Driven Light Theme** — a consistent lavender/neutral palette with semantic status colours
- **Excel Multi-sheet Export** — structured output for further analysis
- **Professional UI** — tabbed workspace (overview / plots / data / log), KPI strip, inline plots, recent files, menu shortcuts, and non-blocking progress/validation feedback
- **Automatic Updates** — update check at startup with verified, in-place reinstall
- **CLI & MCP Interfaces** — headless analysis from the command line or an MCP server for agent/automation workflows

---

## Screenshots

The application ships a Chinese interface; the figures below show the PySide6 main window, the native LabChart viewer, the inline plot gallery, individual plots, and the batch, statistics and AI-trainer dialogs.

| Main window | LabChart waveform viewer |
|---|---|
| ![Main window](docs/images/screenshot-overview.png) | ![LabChart viewer](docs/images/screenshot-labchart.png) |

| Inline plot gallery | Burst-probability plot |
|---|---|
| ![Plot gallery](docs/images/screenshot-plots.png) | ![Burst probability](docs/images/plot-burst-probability.png) |

| Cumulative lick curve | Batch-processing dialog |
|---|---|
| ![Cumulative curve](docs/images/plot-cumulative.png) | ![Batch dialog](docs/images/dialog-batch.png) |

| Statistics dialog | AI model trainer |
|---|---|
| ![Statistics dialog](docs/images/dialog-statistics.png) | ![AI trainer](docs/images/dialog-trainer.png) |

---

## System Requirements

| Requirement | Minimum | Recommended |
|---|---|---|
| **OS** | Windows 10 (x64) | Windows 11 |
| **Python** | 3.10 | 3.11 or 3.12 (source builds only) |
| **RAM** | 4 GB | 8 GB |
| **Display** | 1280 x 720 | 1920 x 1080 |
| **Disk Space** | 500 MB | 1 GB |

> End users who install from the pre-built installer do **not** need Python; the interpreter and all dependencies are bundled. The Python versions above apply only when building or running from source.

---

## Installation

### For End Users (Pre-built Installer)

The recommended way to use Lickometer Pro is the pre-built Windows installer.

1. Open the **Releases** page for this repository: <https://github.com/BuTrue/Lickometer-Pro/releases/latest>
2. Download **`LickometerPro_Setup_1.7.0.exe`** (Windows x64).
3. Run the installer and follow the Chinese setup wizard. The install is **per-user** and needs **no administrator rights**.
4. Launch **Lickometer Pro** from the Start Menu or the desktop shortcut. Running the installer over an existing copy upgrades it in place.

### Automatic Updates

Lickometer Pro checks for a newer version at startup and can also be checked manually from the menu. When a new version is found, the application downloads the installer, verifies its **SHA-256** against the update manifest, and re-runs it for an in-place upgrade.

The update data source is [`update/manifest.json`](update/manifest.json), served by default from:

```
https://raw.githubusercontent.com/BuTrue/Lickometer-Pro/main/update/manifest.json
```

| Field | Meaning |
|---|---|
| `version` | Latest application version (matches the installer) |
| `download_url_windows` | Installer download URL (a GitHub Release asset) |
| `sha256` | Installer SHA-256, enforced by the client after download |
| `min_required_version` | Below this version a full re-install is required |
| `release_notes_zh` / `release_notes_en` | Notes shown in the update dialog |
| `model` | AI-model update channel (`version` / `pkl_url` / `pkl_sha256` / `onnx_url` / `onnx_sha256`) |

The built-in model ships with the application; the `model` channel lets a future model update be delivered independently of the app. The manifest is generated by the release tooling — do not edit version numbers by hand. See [`update/README.md`](update/README.md) for the format.

### For Development

> The following steps apply to the **source repository**, not this public release repository. This repository only contains documentation, screenshots, the installer link and the update manifest.

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd "Lickometer Pro"
```

#### 2. Create a Virtual Environment (Recommended)

```bash
# Windows
python -m venv .venv
.venv\Scripts\activate
```

`main.py` automatically re-launches itself with `.venv\Scripts\python.exe` if it was started by a different interpreter, so a system Python without `adi-reader` cannot break `.adicht` loading. Set `LICKOMETER_NO_REEXEC=1` to disable this.

#### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

#### Required Packages

| Package | Version | Purpose |
|---|---|---|
| `matplotlib` | >=3.7.0 | Plotting and visualisation |
| `numpy` | >=1.24.0 | Numerical computation |
| `pandas` | >=2.0.0 | Data manipulation |
| `scipy` | >=1.10.0 | Scientific computing (fitting algorithms) |
| `scikit-learn` | >=1.3.0 | Machine learning (classifier) |
| `onnxruntime` | ==1.23.2 | ONNX inference |
| `onnx` | ==1.23.2 | ONNX model format |
| `skl2onnx` | ==1.20.0 | scikit-learn → ONNX export |
| `openpyxl` | >=3.1.0 | Excel file export |
| `xlsxwriter` | >=3.1.0 | Advanced Excel export |
| `adi-reader` | ==0.2.0 | LabChart `.adicht` SDK (Windows) |
| `joblib` | ==1.6.0 | Model persistence |
| `darkdetect` | ==0.8.0 | System theme detection |
| `Pillow` | >=10.0.0 | Image processing |
| `psutil` | >=5.9.0 | System monitoring |

---

## Quick Start

1. **Install and Launch** — follow the [Installation](#installation) steps, then run `python main.py` from source (or start the desktop shortcut from the installer).
2. **Load Your Data** — use **Open Data (打开数据)** for `.csv`, `.txt`, `.xlsx` or `.adicht`. LabChart files open a channel-role table (drinking / display-only / ignore) with a live waveform preview; auxiliary channels are shown but not analysed.
3. **Set Parameters** — adjust detection, burst, AI and experiment settings in the left panel.
4. **Analyze & Explore** — click **One-click Analysis (一键分析)**; review the KPI strip and grouped plots, then export to Excel.

---

## Usage

### Launch Application

```bash
python main.py              # PySide6 (Qt) interface
```

### Basic Workflow

1. **Load Data** — import `.txt`, `.csv`, `.xlsx` or `.adicht` via **Open Data (打开数据)** (`Ctrl+O`); for LabChart choose drinking and auxiliary channels, preview the waveforms, then click **One-click Analysis (一键分析)**.
2. **Configure Parameters** — set burst thresholds (default: 1.0 s burst gap, 2 licks minimum), meal criteria (fixed 300 s in the GUI), and analysis options in the left panel.
3. **Start Analysis** — run the pipeline (`Ctrl+R`); the status bar shows progress and the KPI strip appears when finished.
4. **Explore & Export** — switch the grouped visualisation card and save results via **Export Excel** (`Ctrl+E`) or the comprehensive export.

### Batch Processing

Open the **Batch Processing (批量处理)** window to analyse multiple files in one operation:
- Select individual files or whole directories.
- Apply a consistent parameter set across every dataset (locked via a parameter snapshot).
- Export to a single multi-sheet Excel workbook.

### LabChart Folder Batch Reports

Analyse every `.adicht` recording in a folder and export one styled Excel workbook per recording (or per segment). This runs from the source repository:

```bash
python -m src.core.adicht_batch "F:/data" -o "F:/data/_export"
python -m src.core.adicht_batch <folder> -o <out> --segments day --day-start 7
python -m src.core.adicht_batch <folder> -o <out> --split-output
python -m src.core.adicht_batch <file> -o <out> --channels 1,2
```

Drinking channels are detected from the channel name (mouse ID) and signal shape (regular pulse trains such as `Laser` are excluded). Positive peaks map to B1 (pure water) and negative peaks to B2. Every timestamp in the report is the real wall-clock time from the recording: the *valid recording* duration excludes gaps between records while the *wall-clock* duration includes them. The GUI exposes the same runs under **File → Folder Batch Analysis (文件 → 文件夹批量分析)** (record / experiment-day / record + day, with an optional one-file-per-segment mode).

Each workbook contains an overview sheet (with an embedded figure), a per-animal summary, a segment breakdown, channel identification, a per-day rollup, B1 vs B2, a circadian heatmap, burst details, the ILI distribution (all vs intraburst), a metric glossary, and native editable Excel charts. Folder mode additionally writes a cross-file `_批量汇总.xlsx` summary, and one corrupt file never aborts the batch.

### AI Model Training

Open the AI Trainer from the left **AI Smart Filter (AI 智能过滤)** card (**Train Model / 训练模型**). The trainer needs a parent window, the raw signal, candidate peak indices, the sampling rate and the AI engine; launch it through the UI rather than constructing the window directly.

The classifier is retrained from one drinking and one resting LabChart TXT export, with polarity-flip, baseline-drift and gain augmentation applied automatically. Training reports grouped cross-validation (all augmented copies of a peak stay in one fold) and writes the model checkpoint to `%APPDATA%\LickometerPro\models\` with a `.bak` rollback of the previous version. The application also exports a sibling `lick_model.onnx`; inference prefers the ONNX model when the pair is consistent and falls back to the checkpoint otherwise. Use **Model Settings… (模型设置…)** in the AI panel for cache statistics, one-click retraining, ONNX export and rollback. Manual labels live in `%APPDATA%\LickometerPro\training\labeled_samples.csv`, and AI is enabled by default — if the model cannot be loaded, the run warns and falls back to threshold detection.

### Agent / Automation Interfaces (CLI, MCP, Skill)

The analysis engine is also exposed without the GUI, so agents and scripts can run analyses directly. These interfaces are available in the source repository.

**CLI** (JSON by default):

```bash
python cli.py analyze sample_data/example_lick_data.csv        # dual-bottle
python cli.py analyze data.txt --single --polarity pos --format table -o result.json
python cli.py analyze data.txt --with-ili-gaussian             # ILI Gaussian / peaks / ranges
python cli.py batch a.txt b.txt c.txt                          # JSON array
python cli.py compare a.txt b.txt c.txt --bottle b1            # mean / SEM / median
```

**MCP server** (stdio): run `python mcp_server.py` and register it in your MCP client configuration. It exposes the tools `analyze_file`, `batch_analyze`, `compare_files`, `compare_groups`, `compute_burst_details`, `exclude_long_licks`, `compute_pca`, `compute_activity_heatmap`, `compute_ili_gaussian` and `get_info`.

```json
{
  "mcpServers": {
    "lickometer-pro": {
      "command": "python",
      "args": ["mcp_server.py"]
    }
  }
}
```

**Skill**: `skills/lickometer-pro/SKILL.md` documents how an agent should call the above (parameters, output fields and interpretation). All three paths share the same headless analysis service, so results are identical.

---

## Building from Source

### Build Standalone Executable (Windows)

```bash
python build.py
```

**What it does:**
1. Runs the headless test suite (`pytest`; UI-marked tests are excluded by default).
2. Builds a standalone executable using PyInstaller.
3. Outputs to `dist/Lickometer Pro/`.

The standalone output is packaged into the Windows installer described under [Installation](#installation); the installer runs a Chinese setup wizard and upgrades an existing install in place without administrator rights.

### Build Options

| Flag | Description |
|---|---|
| `--clean` | Remove previous build artifacts first |
| `--test-only` | Run tests without building |

### Manual PyInstaller Build

```bash
pyinstaller lickometer_pro.spec
```

---

## Testing

Run the test suite with pytest:

```bash
# Headless tests (default excludes both UI toolkits)
python -m pytest tests/

# Qt tests (separate process; never together with Tk tests)
python -m pytest tests/test_qt_*.py -m qt

# Legacy UI tests (create hidden windows; run explicitly)
python -m pytest tests -m ui

# Run a specific test module
python -m pytest tests/test_microstructure.py
```

---

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|---|---|---|
| Plots not displaying | Matplotlib backend issue | The application uses the `QtAgg` backend. Do not mix two GUI toolkits in one process |
| Application crashes on startup | Missing dependency or stale build | Run from source with `.venv/Scripts/python.exe main.py` and check the traceback |
| Excel export fails | openpyxl version conflict | Upgrade openpyxl: `pip install --upgrade openpyxl` |
| Memory error during batch processing | Large dataset size | Increase system RAM or process files individually |

### Getting Help

If you encounter an issue not listed here, please open an issue with the following information:
- Your operating system and Python version
- The exact error message or traceback from the console
- Steps to reproduce the issue
- Any relevant sample data (anonymised)

---

## FAQ

**Q: What data formats does Lickometer Pro support?**
A: `.txt`, `.csv`, `.xlsx`, and native LabChart `.adicht` recordings. Text/CSV data should contain time and signal columns.

**Q: Is there a command-line interface (CLI) for automated pipelines?**
A: Yes, all core analysis functions are available as a Python API and through the CLI/MCP interfaces. See the [Usage](#usage) section for examples.

**Q: Can the AI model be used with other rodent species (e.g., mice, rats)?**
A: Yes, the classifier is trained on general licking-microstructure features and can be adapted to any rodent species with appropriate training data.

**Q: Do I need to install Python to run Lickometer Pro?**
A: No. The Windows installer bundles the runtime and all dependencies. Python is only required to build or run from source.

**Q: How do I report a bug or request a feature?**
A: Please use the project's [issue tracker](https://github.com/BuTrue/Lickometer-Pro/issues) to report bugs or request features.

---

## Roadmap

- [x] **v1.2.0**: Batch 2.0 with locked parameters, plot tab-view, and purple theme
- [x] **v1.7.0**: 17 analysis modules and expanded CLI/MCP tooling
- [ ] **Unreleased**: tabbed workspace, inline plots, recent files, and non-blocking feedback
- [ ] **Future**: Cloud-based data storage and collaboration

---

## Project Structure

This repository is the **public release distribution** — documentation, screenshots, the installer link and the update manifest only. Core source code is not published here.

```
Lickometer-Pro/                     # public release repository
|-- README.md            # 中文 (default)
|-- README.en.md         # English (this file)
|-- README.ja.md         # 日本語
|-- README.fr.md         # Français
|-- LICENSE.txt          # MIT licence
|-- docs/
|   `-- images/          # screenshots referenced by the READMEs
|-- release-notes/
|   `-- v1.7.0.md        # per-version release notes
|-- update/
|   |-- README.md        # update-manifest format
|   `-- manifest.json    # auto-update data source
`-- .github/
    `-- workflows/
        `-- release.yml  # release automation
```

In the source repository the analysis pipeline is organised by function: a headless **core service** (peak detection, burst/meal microstructure and Weibull fitting, and the AI prediction engine), a **model store** (built-in and user model persistence), a **LabChart `.adicht` reader/pipeline** (streaming, multi-channel, gap-aware), **I/O utilities** (TXT/CSV/XLSX), the **PySide6 user interface** (main window, batch module, statistics dashboard, AI trainer, waveform viewer and dialogs), plus **CLI** and **MCP server** entry points and an agent **skill** definition. The CLI, MCP and GUI all call the same core service, so results are identical across interfaces.

---

## Contributing

We welcome contributions from the neuroscience and open-source communities!

### How to Contribute

1. **Fork the Repository** — create your own fork of the project
2. **Create a Branch** — `git checkout -b feature/your-feature-name`
3. **Make Changes** — follow the existing code style and add tests
4. **Test Thoroughly** — ensure all tests pass (`python -m pytest tests/`)
5. **Submit a Pull Request** — describe your changes clearly

### Development Guidelines

- Follow **PEP 8** style guidelines for Python code
- Add docstrings to all public functions and classes (Google/NumPy style)
- Include unit tests for new features
- Update documentation for API changes
- Ensure compatibility with **Python 3.10–3.12**

### Reporting Issues

Please use the [GitHub issue tracker](https://github.com/BuTrue/Lickometer-Pro/issues) to report bugs or request features. Include:
- Python version and operating system
- Steps to reproduce the issue
- Expected vs. actual behaviour
- Sample data files (if applicable)

---

## Changelog

See [`release-notes/v1.7.0.md`](release-notes/v1.7.0.md) for the v1.7.0 highlights, and [`CHANGELOG.md`](https://github.com/BuTrue/Lickometer-Pro) in the source repository for the full release history.

---

## License

This project is licensed under the **MIT License** — see [LICENSE.txt](LICENSE.txt).

```
MIT License

Copyright (c) 2025 Lickometer Pro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Citation & Acknowledgments

### Academic References

If you use Lickometer Pro in your research, please cite:

1. **Weibull Analysis Method**: Davis, J. D. (1998). A model of the accumulation of internal stimulation in the rat: The satiating effect of food. *Appetite*, 31(3), 435-447. https://doi.org/10.1006/appe.1998.0167

2. **Burst Detection Algorithm**: McCutcheon Lab. `trompy/lickcalc` — a Python package for analysing licking microstructure. https://github.com/mccutcheonlab/trompy

### Authors & Affiliation

Lickometer Pro is developed for rodent licking microstructure and neuroscience research.

### Acknowledgments

We thank the open-source community for the excellent Python scientific-computing ecosystem that makes this tool possible.

Special thanks to:
- The **PySide6** team for the Qt interface
- The **ADInstruments** team for the LabChart `.adicht` SDK
- The **McCutcheon Lab** for their open-source lick-analysis algorithms
- The **NumPy, SciPy, scikit-learn, and matplotlib** communities for robust scientific-computing tools

---

<div align="center">

**Made for Neuroscience Research**

*Lickometer Pro (c) 2025*

</div>
