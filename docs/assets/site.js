/* Lickometer Pro — landing page behaviour (single source of truth: this file).
   Plain vanilla JS, no dependencies, no external requests, no analytics.

   Contract with index.html:
   - text nodes: <element data-i18n="some.key">Chinese default text</element>
   - attributes: <element data-i18n-attr="attr:key;attr:key2">  (single pair ok)
   - gallery tabs: <button class="tab-btn" data-panel="panelId"> +
                  <div class="tab-panel" id="panelId">
   - zh strings live in this file (not read back from the DOM) so a failed
     lookup can never blank out a page; en/ja/fr fall back to zh per key. */
(function () {
  "use strict";

  var I18N = {
    zh: {
      "meta.title": "Lickometer Pro — 啮齿动物舔舐微观结构分析系统",
      "a11y.skip": "跳到主要内容",
      "a11y.menutoggle": "打开导航菜单",
      "a11y.mainnav": "主导航",
      "a11y.langlabel": "语言",
      "a11y.theme": "切换深色/浅色主题",
      "nav.features": "功能",
      "nav.gallery": "界面",
      "nav.download": "下载",
      "nav.docs": "文档",
      "nav.update": "更新",
      "hero.lic": "MIT 开源",
      "hero.title": "啮齿动物舔舐微观结构分析系统",
      "hero.sub": "基于 PySide6 的专业桌面应用：读取 TXT / CSV / XLSX 与 LabChart .adicht，输出爆发、餐次与舔舐间隔（ILI）全套微观结构指标，一键生成出版级图表与多工作表 Excel。",
      "hero.cta1": "下载安装包",
      "hero.cta2": "查看文档",
      "hero.chip1": "中文界面",
      "hero.chip2": "本地离线分析",
      "hero.chip3": "自动检查更新",
      "hero.imgalt": "Lickometer Pro 主界面：LabChart 多通道波形与双瓶分析",
      "stats.label": "数据一览",
      "stats.s1": "类出版级图表",
      "stats.s2": "项微观结构指标",
      "stats.s3": "个水瓶极性通道",
      "stats.s4": "本地离线处理",
      "feat.kicker": "功能",
      "feat.title": "从原始记录到论文图表的完整闭环",
      "feat.c1t": "双瓶 / 单瓶分析",
      "feat.c1b": "同一段记录按峰的正 / 负极性拆分为两个水瓶（B1 / B2），自动给出偏好率、偏好指数与换瓶统计；单瓶记录照常处理。",
      "feat.c2t": "LabChart 原生导入",
      "feat.c2b": "经官方 ADInstruments SDK（adi-reader）流式读取多日、多通道、多 record 的 .adicht，恒定内存占用；按通道分配「饮水统计 / 辅助展示 / 忽略」。",
      "feat.c3t": "爆发 · 餐次 · ILI",
      "feat.c3b": "Burst / Meal / 爆发内频率阈值全部可调；对舔舐间隔分布做 Weibull 拟合（Davis, 1998）与高斯混合，统计比较支持 Mann–Whitney U 与 Kruskal–Wallis + Dunn 事后。",
      "feat.c4t": "AI 舔舐识别",
      "feat.c4b": "波形手动标注后一键重训模型，ONNX 推理过滤伪峰，文件损坏自动回退 .pkl 检查点；模型可与软件分离、独立推送更新。",
      "feat.c5t": "14 类图表 · Excel 导出",
      "feat.c5b": "时间序列、分布与热图、爆发与关系三组共 14 类图表内嵌窗口显示；导出「概览 / 指标 / 每分钟统计 / 偏好」四张工作表的多 Sheet 工作簿。",
      "feat.c6t": "批量 · CLI · MCP",
      "feat.c6b": "文件夹级批量分析带逐文件进度与 ETA；命令行提供 analyze / batch / compare；MCP 服务器向 agent 暴露 10 个分析工具——三种接口共用同一分析服务，结果一致。",
      "gal.kicker": "界面预览",
      "gal.title": "真实运行截图",
      "gal.sub": "应用为中文界面。以下截图取自 PySide6 主窗口、内嵌图表工作区与各功能对话框。",
      "gal.tablist": "界面预览",
      "gal.tabMain": "主窗口",
      "gal.tabPlots": "图表",
      "gal.tabDialogs": "对话框",
      "gal.cap.overview": "「概览」工作区：KPI 摘要卡与信号曲线",
      "gal.cap.labchart": "LabChart 波形查看器：多通道导航与整段密度缩略图",
      "gal.cap.plots": "「图表」工作区：14 类图表内嵌显示",
      "gal.cap.cumulative": "累积舔舐曲线：随时间累计的舔舐次数",
      "gal.cap.burst": "爆发概率图：burst 规模与概率分布",
      "gal.cap.batch": "文件夹批量处理：统一参数、逐文件进度与合并输出",
      "gal.cap.stats": "统计分析对话框：跨文件均值 / SEM / 中位数比较",
      "gal.cap.trainer": "AI 训练窗口：波形标注与一键重训",
      "gal.alt.overview": "概览工作区截图：KPI 摘要卡与信号曲线",
      "gal.alt.labchart": "LabChart 波形查看器截图：多通道导航与密度缩略图",
      "gal.alt.plots": "图表工作区截图：14 类图表内嵌显示",
      "gal.alt.cumulative": "累积舔舐曲线图：随时间累计的舔舐次数",
      "gal.alt.burst": "爆发概率图：burst 规模与概率分布",
      "gal.alt.batch": "批量处理对话框截图：文件夹批量分析进度",
      "gal.alt.stats": "统计分析对话框截图：跨文件均值 / SEM / 中位数比较",
      "gal.alt.trainer": "AI 训练窗口截图：波形标注与一键重训",
      "flow.kicker": "使用流程",
      "flow.title": "五步从数据到结果",
      "flow.s1t": "打开数据",
      "flow.s1b": "点击顶部「打开数据」或按 Ctrl+O，支持 .txt / .csv / .xlsx / .adicht，自动嗅探分隔符。",
      "flow.s2t": "通道设置",
      "flow.s2b": "选择 LabChart 文件后，在通道角色表中把每个通道设为「饮水统计 / 辅助展示 / 忽略」，右下角预览波形。",
      "flow.s3t": "一键分析",
      "flow.s3b": "点击「一键分析」或按 Ctrl+R，状态栏显示进度；完成后呈现 KPI、交互式波形与累积曲线。",
      "flow.s4t": "查看图表",
      "flow.s4b": "切换到「图表」工作区，在时间序列 / 分布与热图 / 爆发与关系三组中选择 14 类图表。",
      "flow.s5t": "导出结果",
      "flow.s5b": "「数据导出」→「导出 Excel（分析数据）」，得到多工作表结果，可直接用于统计与论文作图。",
      "upd.kicker": "软件更新",
      "upd.title": "发现新版本，就自动覆盖安装",
      "upd.s1t": "启动自动检查",
      "upd.s1b": "软件启动后自动比对最新版本；也可在右上角「⋯」→「检查更新…」随时手动触发。",
      "upd.s2t": "下载即校验",
      "upd.s2b": "发现新版本后点击「立即下载」；下载完成自动校验 SHA-256，校验通过才继续安装。",
      "upd.s3t": "静默覆盖安装",
      "upd.s3b": "校验通过后静默覆盖安装并自动重启；用户数据保存在 %APPDATA%\\LickometerPro，升级不受影响。",
      "upd.s4t": "AI 模型独立更新",
      "upd.s4b": "舔舐识别模型可与软件本体分离推送，更新模型无需重装软件。",
      "upd.manifest": "更新数据源（清单）：",
      "dl.kicker": "下载",
      "dl.title": "开始使用 Lickometer Pro",
      "dl.sub": "安装包为 Windows x64 安装向导（中文界面），当前用户级安装，无需管理员权限、不弹 UAC。",
      "dl.btn": "下载 v1.7.0 安装包",
      "dl.f1": "GitHub Releases 提供 LickometerPro_Setup_1.7.0.exe 与 SHA-256 校验值",
      "dl.f2": "已安装旧版本时直接覆盖升级，用户数据保留",
      "dl.f3": "卸载不会删除 %APPDATA%\\LickometerPro 中的模型与标注缓存",
      "dl.reqTitle": "系统要求",
      "dl.th.item": "项目",
      "dl.th.min": "最低",
      "dl.th.rec": "推荐",
      "dl.r.os": "操作系统",
      "dl.r.ram": "内存",
      "dl.r.disk": "磁盘",
      "dl.r.disk.min": "1 GB 可用空间",
      "dl.r.disk.rec": "2 GB",
      "dl.r.disp": "显示",
      "doc.kicker": "文档",
      "doc.title": "多语言文档",
      "doc.d1t": "README（中文）",
      "doc.d1b": "功能总览、安装、快速开始、CLI 与 MCP、常见问题",
      "doc.d2b": "Features, installation, quick start, CLI & MCP, FAQ",
      "doc.d3b": "機能、インストール、クイックスタート、CLI / MCP、FAQ",
      "doc.d4b": "Fonctionnalités, installation, démarrage rapide, CLI & MCP, FAQ",
      "doc.d5t": "安装说明",
      "doc.d5b": "系统要求、安装、升级与卸载、常见问题",
      "doc.d6t": "更新日志",
      "doc.d6b": "版本变更记录与已知限制",
      "doc.note": "本仓库为发布仓库：仅提供安装包、文档与更新清单，源码不公开。Weibull ILI 拟合方法参考 Davis, J. D. (1998), Appetite 31(3), 435–447（DOI: 10.1006/appe.1998.0167）。",
      "foot.tagline": "为神经科学研究而作",
      "foot.linksLabel": "页脚链接",
      "foot.repo": "GitHub 仓库",
      "foot.releases": "Releases",
      "foot.license": "MIT 许可证",
      "foot.disclaimer": "本项目为研究工具，不用于临床诊断。"
    },
    en: {
      "meta.title": "Lickometer Pro — Rodent Licking Microstructure Analysis",
      "a11y.skip": "Skip to main content",
      "a11y.menutoggle": "Open navigation menu",
      "a11y.mainnav": "Main navigation",
      "a11y.langlabel": "Language",
      "a11y.theme": "Toggle dark / light theme",
      "nav.features": "Features",
      "nav.gallery": "Screens",
      "nav.download": "Download",
      "nav.docs": "Docs",
      "nav.update": "Updates",
      "hero.lic": "MIT licensed",
      "hero.title": "Microstructure analysis for rodent licking behaviour",
      "hero.sub": "A professional PySide6 desktop app: reads TXT / CSV / XLSX and LabChart .adicht files, computes the full set of burst, meal and inter-lick-interval (ILI) metrics, and produces publication-ready plots plus multi-sheet Excel reports in one click.",
      "hero.cta1": "Download installer",
      "hero.cta2": "View documentation",
      "hero.chip1": "Chinese UI",
      "hero.chip2": "Fully local & offline",
      "hero.chip3": "Automatic update checks",
      "hero.imgalt": "Lickometer Pro main window: LabChart multi-channel waveforms with dual-bottle analysis",
      "stats.label": "At a glance",
      "stats.s1": "publication-grade plot types",
      "stats.s2": "microstructure metrics",
      "stats.s3": "bottle polarity channels",
      "stats.s4": "processed locally, offline",
      "feat.kicker": "Features",
      "feat.title": "A complete loop from raw recording to journal figure",
      "feat.c1t": "Dual / single bottle",
      "feat.c1b": "One recording is split into two bottles (B1 / B2) by positive / negative peak polarity, with preference ratio, preference index and switch statistics; single-bottle records are handled as usual.",
      "feat.c2t": "Native LabChart import",
      "feat.c2b": "Streams multi-day, multi-channel, multi-record .adicht files at constant memory via the official ADInstruments SDK (adi-reader); assign each channel to drinking / auxiliary / ignore.",
      "feat.c3t": "Burst · meal · ILI",
      "feat.c3b": "Fully configurable burst / meal / intraburst-frequency thresholds; Weibull fitting (Davis, 1998) and Gaussian mixtures of the ILI distribution; Mann–Whitney U and Kruskal–Wallis + Dunn post-hoc comparisons.",
      "feat.c4t": "AI lick detection",
      "feat.c4b": "Label peaks on the waveform, retrain the model with one click, filter false peaks with ONNX inference, and fall back to the .pkl checkpoint automatically if a file is corrupted; the model can be updated independently of the app.",
      "feat.c5t": "14 plot types · Excel",
      "feat.c5b": "Three groups — time series, distributions & heatmaps, burst & relationships — 14 plot types rendered inline; export a four-sheet workbook (overview / metrics / per-minute / preference).",
      "feat.c6t": "Batch · CLI · MCP",
      "feat.c6b": "Folder-level batch analysis with per-file progress and ETA; a command line with analyze / batch / compare; an MCP server exposing 10 analysis tools to agents — all three paths share one analysis engine, so results are identical.",
      "gal.kicker": "Interface",
      "gal.title": "Real screenshots",
      "gal.sub": "The application ships a Chinese interface. The figures below show the PySide6 main window, the inline plot gallery and the batch, statistics and AI-trainer dialogs.",
      "gal.tablist": "Interface preview",
      "gal.tabMain": "Main window",
      "gal.tabPlots": "Plots",
      "gal.tabDialogs": "Dialogs",
      "gal.cap.overview": "Overview workspace: KPI cards and signal curves",
      "gal.cap.labchart": "LabChart waveform viewer: multi-channel navigation and density overview",
      "gal.cap.plots": "Plots workspace: 14 plot types shown inline",
      "gal.cap.cumulative": "Cumulative lick curve: licks accumulated over time",
      "gal.cap.burst": "Burst-probability plot: burst size vs probability distribution",
      "gal.cap.batch": "Folder batch processing: shared parameters, per-file progress, merged output",
      "gal.cap.stats": "Statistics dialog: cross-file mean / SEM / median comparison",
      "gal.cap.trainer": "AI trainer: waveform labelling and one-click retraining",
      "gal.alt.overview": "Overview workspace: KPI cards and signal curves",
      "gal.alt.labchart": "LabChart waveform viewer with multi-channel navigation",
      "gal.alt.plots": "Plots workspace showing 14 inline plot types",
      "gal.alt.cumulative": "Cumulative lick curve plot",
      "gal.alt.burst": "Burst probability plot",
      "gal.alt.batch": "Batch-processing dialog",
      "gal.alt.stats": "Statistics dialog",
      "gal.alt.trainer": "AI model trainer dialog",
      "flow.kicker": "Workflow",
      "flow.title": "From data to results in five steps",
      "flow.s1t": "Open data",
      "flow.s1b": "Click “Open data” or press Ctrl+O; .txt / .csv / .xlsx / .adicht are auto-detected, including delimiters.",
      "flow.s2t": "Assign channels",
      "flow.s2b": "For LabChart files, set every channel to drinking / auxiliary / ignore in the channel-role table and preview the waveform.",
      "flow.s3t": "One-click analysis",
      "flow.s3b": "Click “Analyze” or press Ctrl+R; the status bar shows progress, then KPIs, interactive waveforms and the cumulative curve appear.",
      "flow.s4t": "Browse plots",
      "flow.s4b": "Switch to the Plots workspace and pick from the 14 chart types across the three groups.",
      "flow.s5t": "Export results",
      "flow.s5b": "Export Excel writes the multi-sheet workbook, ready for statistics and journal figures.",
      "upd.kicker": "Updates",
      "upd.title": "A new version means an automatic in-place install",
      "upd.s1t": "Checked at startup",
      "upd.s1b": "The app compares its version with the latest release on launch; you can also pick “⋯ → Check for updates…” at any time.",
      "upd.s2t": "Verified download",
      "upd.s2b": "After “Download now”, the installer is checked against its published SHA-256 before anything is installed.",
      "upd.s3t": "Silent in-place upgrade",
      "upd.s3b": "Once verified, the installer silently overwrites the old version and restarts; user data in %APPDATA%\\LickometerPro is preserved.",
      "upd.s4t": "Independent model updates",
      "upd.s4b": "The lick-detection model can be pushed separately from the app — no reinstall needed.",
      "upd.manifest": "Update manifest:",
      "dl.kicker": "Download",
      "dl.title": "Get started with Lickometer Pro",
      "dl.sub": "A Windows x64 installer with a Chinese setup wizard. Per-user install: no administrator rights, no UAC prompt.",
      "dl.btn": "Download v1.7.0 installer",
      "dl.f1": "GitHub Releases host LickometerPro_Setup_1.7.0.exe together with its SHA-256 checksum",
      "dl.f2": "Installing over an older version upgrades in place and keeps user data",
      "dl.f3": "Uninstalling keeps the models and labelling cache in %APPDATA%\\LickometerPro",
      "dl.reqTitle": "System requirements",
      "dl.th.item": "Item",
      "dl.th.min": "Minimum",
      "dl.th.rec": "Recommended",
      "dl.r.os": "Operating system",
      "dl.r.ram": "Memory",
      "dl.r.disk": "Disk",
      "dl.r.disk.min": "1 GB free",
      "dl.r.disk.rec": "2 GB",
      "dl.r.disp": "Display",
      "doc.kicker": "Documentation",
      "doc.title": "Documentation in four languages",
      "doc.d1t": "README (Chinese)",
      "doc.d1b": "Feature overview, installation, quick start, CLI & MCP, FAQ",
      "doc.d2b": "Feature overview, installation, quick start, CLI & MCP, FAQ",
      "doc.d3b": "Features, installation, quick start, CLI / MCP, FAQ (Japanese README)",
      "doc.d4b": "Fonctionnalités, installation, démarrage rapide, CLI & MCP, FAQ",
      "doc.d5t": "Install guide",
      "doc.d5b": "System requirements, install, upgrade, uninstall, troubleshooting",
      "doc.d6t": "Changelog",
      "doc.d6b": "Version history and known limitations",
      "doc.note": "This is a release repository: installers, documentation and the update manifest only — the source code is not public. The Weibull ILI method follows Davis, J. D. (1998), Appetite 31(3), 435–447 (DOI: 10.1006/appe.1998.0167).",
      "foot.tagline": "Made for neuroscience research",
      "foot.linksLabel": "Footer links",
      "foot.repo": "GitHub repository",
      "foot.releases": "Releases",
      "foot.license": "MIT licence",
      "foot.disclaimer": "Research tool only — not intended for clinical diagnostics."
    },
    ja: {
      "meta.title": "Lickometer Pro — ネズミ類舔取行動の微小構造解析",
      "a11y.skip": "本文へスキップ",
      "a11y.menutoggle": "ナビゲーションメニューを開く",
      "a11y.mainnav": "メインナビゲーション",
      "a11y.langlabel": "言語",
      "a11y.theme": "ダーク/ライトテーマ切替",
      "nav.features": "機能",
      "nav.gallery": "画面",
      "nav.download": "ダウンロード",
      "nav.docs": "ドキュメント",
      "nav.update": "アップデート",
      "hero.lic": "MIT オープンソース",
      "hero.title": "ネズミ類舔取行動の微小構造解析システム",
      "hero.sub": "PySide6 ベースのプロフェッショナルデスクトップアプリ。TXT / CSV / XLSX と LabChart .adicht を読み込み、バースト・食事・舔取間隔（ILI）の微小構造指標を算出し、出版レベルの図表と複数シート Excel をワンクリックで出力します。",
      "hero.cta1": "インストーラーをダウンロード",
      "hero.cta2": "ドキュメントを見る",
      "hero.chip1": "中国語 UI",
      "hero.chip2": "完全ローカル処理",
      "hero.chip3": "自動アップデート確認",
      "hero.imgalt": "Lickometer Pro 起動画面：LabChart 多チャンネル波形と2瓶分析",
      "stats.label": "概要",
      "stats.s1": "種の出版レベル図表",
      "stats.s2": "項目の微小構造指標",
      "stats.s3": "つの瓶極性チャンネル",
      "stats.s4": "ローカル・オフライン処理",
      "feat.kicker": "機能",
      "feat.title": "生データから論文の図までを一気通貫で",
      "feat.c1t": "2瓶 / 1瓶解析",
      "feat.c1b": "ピーク正・負極性で同じ記録を2つの水瓶（B1 / B2）に分割し、嗜好率・嗜好指数・スイッチ統計を自動算出。1瓶記録もそのまま解析できます。",
      "feat.c2t": "LabChart ネイティブ読込",
      "feat.c2b": "公式 ADInstruments SDK（adi-reader）で多日・多チャンネル・multi-record の .adicht を一定メモリでストリーミング読み込み。チャンネルを「飲水 / 補助表示 / 無視」に割り当て可能。",
      "feat.c3t": "バースト・食事・ILI",
      "feat.c3b": "Burst / Meal / バースト内頻度の閾値は全て調整可能。ILI 分布の Weibull フィッティング（Davis, 1998）とガウス混合、Mann–Whitney U と Kruskal–Wallis + Dunn 検定に対応。",
      "feat.c4t": "AI による舔取識別",
      "feat.c4b": "波形を手動アノテーション後にワンクリック再訓練。ONNX 推論で偽ピークを除去し、ファイル破損時は .pkl に自動フォールバック。モデルはアプリ本体と独立して更新できます。",
      "feat.c5t": "14 種の図表・Excel",
      "feat.c5b": "時系列 / 分布とヒートマップ / バーストと相関の3グループ計14種をウィンドウ内に埋め込み表示。「概要 / 指標 / 毎分統計 / 嗜好」の4シート Excel を出力。",
      "feat.c6t": "一括・CLI・MCP",
      "feat.c6b": "フォルダ単位のバッチ解析はファイル別進捗と ETA 付き。CLI は analyze / batch / compare、MCP サーバーはエージェントに10個の解析ツールを提供。3経路は同一解析サービスを使い、結果も一致します。",
      "gal.kicker": "画面プレビュー",
      "gal.title": "実際のスクリーンショット",
      "gal.sub": "アプリの UI は中国語です。以下は PySide6 メインウィンドウ、埋め込み図表ワークスペース、各種ダイアログのスクリーンショットです。",
      "gal.tablist": "画面プレビュー",
      "gal.tabMain": "メインウィンドウ",
      "gal.tabPlots": "図表",
      "gal.tabDialogs": "ダイアログ",
      "gal.cap.overview": "「概要」ワークスペース：KPI カードと信号曲線",
      "gal.cap.labchart": "LabChart 波形ビューア：多チャンネルナビゲーションと全体密度サムネイル",
      "gal.cap.plots": "「図表」ワークスペース：14種の図表を埋め込み表示",
      "gal.cap.cumulative": "累積舔取曲線：時間とともに累積した舔取回数",
      "gal.cap.burst": "バースト確率図：burst サイズと確率分布",
      "gal.cap.batch": "フォルダ一括処理：共通パラメータ・ファイル別進捗・結合出力",
      "gal.cap.stats": "統計ダイアログ：ファイル横断の平均 / SEM / 中央値比較",
      "gal.cap.trainer": "AI 訓練ウィンドウ：波形アノテーションとワンクリック再訓練",
      "gal.alt.overview": "概要ワークスペース：KPI カードと信号曲線のスクリーンショット",
      "gal.alt.labchart": "LabChart 波形ビューア：多チャンネルナビゲーションのスクリーンショット",
      "gal.alt.plots": "図表ワークスペース：14種の埋め込み図表のスクリーンショット",
      "gal.alt.cumulative": "累積舔取曲線の図",
      "gal.alt.burst": "バースト確率分布の図",
      "gal.alt.batch": "一括処理ダイアログのスクリーンショット",
      "gal.alt.stats": "統計分析ダイアログのスクリーンショット",
      "gal.alt.trainer": "AI 訓練ウィンドウのスクリーンショット",
      "flow.kicker": "使い方",
      "flow.title": "データから結果まで5ステップ",
      "flow.s1t": "データを開く",
      "flow.s1b": "上部の「データを開く」または Ctrl+O。txt / csv / xlsx / adicht に対応し、区切り文字を自動判定します。",
      "flow.s2t": "チャンネル設定",
      "flow.s2b": "LabChart ファイル選択後、各チャンネルを「飲水統計 / 補助表示 / 無視」に設定し、右下で波形をプレビューします。",
      "flow.s3t": "ワンクリック解析",
      "flow.s3b": "「ワンクリック解析」または Ctrl+R。ステータスバーに進捗が表示され、完了後 KPI・インタラクティブ波形・累積曲線が現れます。",
      "flow.s4t": "図表を見る",
      "flow.s4b": "「図表」ワークスペースで、時系列 / 分布とヒートマップ / バーストと相関の3グループから14種を選択します。",
      "flow.s5t": "結果を出力",
      "flow.s5b": "「データ出力」→「Excel 出力（解析データ）」で複数シートの結果を取得し、統計・論文図表にそのまま利用できます。",
      "upd.kicker": "アップデート",
      "upd.title": "新バージョンを見つけたら自動で上書きインストール",
      "upd.s1t": "起動時に自動チェック",
      "upd.s1b": "起動後に最新版を自動比較。右上「⋯」→「更新を確認…」で手動実行も可能です。",
      "upd.s2t": "ダウンロード後 SHA-256 検証",
      "upd.s2b": "「今すぐダウンロード」後、インストーラーの SHA-256 を自動検証し、合格した場合のみインストールを進めます。",
      "upd.s3t": "サイレント上書きインストール",
      "upd.s3b": "検証合格後、サイレントで上書きインストールし自動再起動。ユーザーデータは %APPDATA%\\LickometerPro に保存され、アップグレードでも消えません。",
      "upd.s4t": "AI モデルの独立更新",
      "upd.s4b": "舔取識別モデルはアプリ本体と分離して配信でき、再インストール不要で更新できます。",
      "upd.manifest": "更新データソース（マニフェスト）：",
      "dl.kicker": "ダウンロード",
      "dl.title": "Lickometer Pro を始めましょう",
      "dl.sub": "Windows x64 用インストーラー（ウィザードは中国語）。現在ユーザー向けインストールのため管理者権限は不要、UAC も表示されません。",
      "dl.btn": "v1.7.0 インストーラーをダウンロード",
      "dl.f1": "GitHub Releases に LickometerPro_Setup_1.7.0.exe と SHA-256 検証値を公開",
      "dl.f2": "旧バージョン上書きインストールでそのままアップグレード、ユーザーデータは保持",
      "dl.f3": "アンインストールでも %APPDATA%\\LickometerPro のモデルとアノテーションキャッシュは削除されません",
      "dl.reqTitle": "動作環境",
      "dl.th.item": "項目",
      "dl.th.min": "最低",
      "dl.th.rec": "推奨",
      "dl.r.os": "OS",
      "dl.r.ram": "メモリ",
      "dl.r.disk": "ディスク",
      "dl.r.disk.min": "空き 1 GB",
      "dl.r.disk.rec": "2 GB",
      "dl.r.disp": "解像度",
      "doc.kicker": "ドキュメント",
      "doc.title": "多言語ドキュメント",
      "doc.d1t": "README（中文）",
      "doc.d1b": "機能一覧、インストール、クイックスタート、CLI / MCP、FAQ",
      "doc.d2b": "Features, installation, quick start, CLI & MCP, FAQ",
      "doc.d3b": "機能一覧、インストール、クイックスタート、CLI / MCP、FAQ",
      "doc.d4b": "Fonctionnalités, installation, démarrage rapide, CLI & MCP, FAQ",
      "doc.d5t": "インストールガイド",
      "doc.d5b": "動作環境、インストール、アップグレードとアンインストール、FAQ",
      "doc.d6t": "変更履歴",
      "doc.d6b": "バージョン変更記録と既知の制限",
      "doc.note": "このリポジトリはリリース用で、インストーラー・ドキュメント・更新マニフェストのみを公開し、ソースコードは非公開です。Weibull ILI 法は Davis, J. D. (1998), Appetite 31(3), 435–447 (DOI: 10.1006/appe.1998.0167) に準拠。",
      "foot.tagline": "神経科学研究のために",
      "foot.linksLabel": "フッターリンク",
      "foot.repo": "GitHub リポジトリ",
      "foot.releases": "Releases",
      "foot.license": "MIT ライセンス",
      "foot.disclaimer": "本研究ツールは臨床診断を目的としません。"
    },
    fr: {
      "meta.title": "Lickometer Pro — Analyse de microstructure du léchage des rongeurs",
      "a11y.skip": "Aller au contenu principal",
      "a11y.menutoggle": "Ouvrir le menu de navigation",
      "a11y.mainnav": "Navigation principale",
      "a11y.langlabel": "Langue",
      "a11y.theme": "Basculer thème sombre / clair",
      "nav.features": "Fonctions",
      "nav.gallery": "Interface",
      "nav.download": "Télécharger",
      "nav.docs": "Documentation",
      "nav.update": "Mises à jour",
      "hero.lic": "licence MIT",
      "hero.title": "Analyse de microstructure du léchage des rongeurs",
      "hero.sub": "Application professionnelle PySide6 : lecture TXT / CSV / XLSX et LabChart .adicht, indicateurs complets de burst, de repas et d’intervalle inter-lick (ILI), graphiques prêts pour publication et rapports Excel multi-feuilles en un clic.",
      "hero.cta1": "Télécharger l’installeur",
      "hero.cta2": "Voir la documentation",
      "hero.chip1": "Interface en chinois",
      "hero.chip2": "Traitement 100 % local",
      "hero.chip3": "Mises à jour automatiques",
      "hero.imgalt": "Fenêtre principale de Lickometer Pro : formes d’onde LabChart multi-canaux et analyse à deux bouteilles",
      "stats.label": "En un coup d’œil",
      "stats.s1": "graphiques prêts pour publication",
      "stats.s2": "indicateurs de microstructure",
      "stats.s3": "canaux de polarité de bouteille",
      "stats.s4": "traitement local hors ligne",
      "feat.kicker": "Fonctions",
      "feat.title": "Boucle complète, de l’enregistrement brut à la figure de publication",
      "feat.c1t": "Deux / une bouteille",
      "feat.c1b": "Un même enregistrement est scindé en deux bouteilles (B1 / B2) selon la polarité positive / négative des pics, avec taux de préférence, indice de préférence et statistiques de changement de bouteille ; les enregistrements mono-bouteille restent pris en charge.",
      "feat.c2t": "Import LabChart natif",
      "feat.c2b": "Lecture en flux des fichiers .adicht multi-jours, multi-canaux et multi-records à mémoire constante via le SDK officiel ADInstruments (adi-reader) ; chaque canal est affecté à « bue / auxiliaire / ignoré ».",
      "feat.c3t": "Burst · repas · ILI",
      "feat.c3b": "Seuils de burst, de repas et de fréquence intra-burst entièrement réglables ; ajustement Weibull (Davis, 1998) et mélanges gaussiens de la distribution ILI ; comparaisons Mann–Whitney U et Kruskal–Wallis avec post-hoc de Dunn.",
      "feat.c4t": "Détection IA du léchage",
      "feat.c4b": "Annotation manuelle des pics, re-entraînement en un clic, inférence ONNX qui filtre les faux pics et repli automatique sur le point de contrôle .pkl ; le modèle peut être mis à jour indépendamment du logiciel.",
      "feat.c5t": "14 graphiques · Excel",
      "feat.c5b": "Trois groupes — séries temporelles, distributions et cartes de chaleur, burst et relations — 14 types de graphiques intégrés à la fenêtre ; export d’un classeur à quatre feuilles (aperçu / indicateurs / par minute / préférence).",
      "feat.c6t": "Lot · CLI · MCP",
      "feat.c6b": "Traitement par dossier avec progression et ETA par fichier ; ligne de commande analyze / batch / compare ; serveur MCP exposant 10 outils d’analyse aux agents — les trois voies partagent le même moteur, résultats identiques.",
      "gal.kicker": "Aperçu",
      "gal.title": "Captures réelles",
      "gal.sub": "L’application est en chinois. Les captures ci-dessous montrent la fenêtre principale PySide6, l’atelier de graphiques intégré et les boîtes de dialogue lot, statistiques et entraînement IA.",
      "gal.tablist": "Aperçu de l’interface",
      "gal.tabMain": "Fenêtre principale",
      "gal.tabPlots": "Graphiques",
      "gal.tabDialogs": "Boîtes de dialogue",
      "gal.cap.overview": "Atelier « Aperçu » : cartes KPI et courbes du signal",
      "gal.cap.labchart": "Visionneuse LabChart : navigation multi-canaux et vignette de densité",
      "gal.cap.plots": "Atelier « Graphiques » : 14 types de graphiques intégrés",
      "gal.cap.cumulative": "Courbe cumulative : léchage accumulé dans le temps",
      "gal.cap.burst": "Probabilité de burst : taille des bursts vs distribution",
      "gal.cap.batch": "Traitement par dossier : paramètres communs, progression, sortie fusionnée",
      "gal.cap.stats": "Dialogue de statistiques : moyenne / ESM / médiane entre fichiers",
      "gal.cap.trainer": "Entraîneur IA : annotation des formes d’onde et re-entraînement en un clic",
      "gal.alt.overview": "Atelier Aperçu avec cartes KPI et courbes du signal",
      "gal.alt.labchart": "Visionneuse de formes d’onde LabChart multi-canaux",
      "gal.alt.plots": "Atelier Graphiques : 14 types de graphiques intégrés",
      "gal.alt.cumulative": "Graphique de courbe cumulative de léchage",
      "gal.alt.burst": "Graphique de probabilité de burst",
      "gal.alt.batch": "Boîte de dialogue de traitement par lot",
      "gal.alt.stats": "Boîte de dialogue de statistiques",
      "gal.alt.trainer": "Boîte de dialogue d’entraînement du modèle IA",
      "flow.kicker": "Parcours",
      "flow.title": "Des données aux résultats en cinq étapes",
      "flow.s1t": "Ouvrir les données",
      "flow.s1b": "« Ouvrir » ou Ctrl+O ; .txt / .csv / .xlsx / .adicht, avec détection automatique du séparateur.",
      "flow.s2t": "Rôles des canaux",
      "flow.s2b": "Pour un fichier LabChart, définissez chaque canal sur « bue / auxiliaire / ignoré » et prévisualisez la forme d’onde.",
      "flow.s3t": "Analyse en un clic",
      "flow.s3b": "« Analyser » ou Ctrl+R ; progression dans la barre d’état, puis KPI, formes d’onde interactives et courbe cumulative.",
      "flow.s4t": "Explorer les graphiques",
      "flow.s4b": "Passez à l’atelier « Graphiques » et choisissez parmi les 14 types répartis en trois groupes.",
      "flow.s5t": "Exporter",
      "flow.s5b": "« Exporter Excel (données analysées) » produit un classeur multi-feuilles prêt pour les statistiques et les figures.",
      "upd.kicker": "Mises à jour",
      "upd.title": "Nouvelle version détectée : installation sur place automatique",
      "upd.s1t": "Vérification au démarrage",
      "upd.s1b": "L’application compare sa version à la dernière publication au lancement ; vérification manuelle possible via « ⋯ → Rechercher des mises à jour… ».",
      "upd.s2t": "Téléchargement vérifié",
      "upd.s2b": "Après « Télécharger maintenant », le SHA-256 de l’installeur est vérifié avant toute installation.",
      "upd.s3t": "Installation silencieuse sur place",
      "upd.s3b": "Après vérification, l’installation remplace silencieusement l’ancienne version et redémarre ; les données dans %APPDATA%\\LickometerPro sont conservées.",
      "upd.s4t": "Modèle IA mis à jour séparément",
      "upd.s4b": "Le modèle de détection peut être publié indépendamment du logiciel — aucune réinstallation nécessaire.",
      "upd.manifest": "Manifeste de mise à jour :",
      "dl.kicker": "Téléchargement",
      "dl.title": "Commencer avec Lickometer Pro",
      "dl.sub": "Installeur Windows x64 avec assistant d’installation en chinois. Installation par utilisateur : pas de droits administrateur, aucun message UAC.",
      "dl.btn": "Télécharger l’installeur v1.7.0",
      "dl.f1": "GitHub Releases héberge LickometerPro_Setup_1.7.0.exe et son empreinte SHA-256",
      "dl.f2": "Une installation par-dessus une ancienne version met à jour sur place et conserve les données",
      "dl.f3": "La désinstallation ne supprime pas les modèles et caches d’annotation dans %APPDATA%\\LickometerPro",
      "dl.reqTitle": "Configuration requise",
      "dl.th.item": "Élément",
      "dl.th.min": "Minimum",
      "dl.th.rec": "Recommandé",
      "dl.r.os": "Système",
      "dl.r.ram": "Mémoire",
      "dl.r.disk": "Disque",
      "dl.r.disk.min": "1 Go libre",
      "dl.r.disk.rec": "2 Go",
      "dl.r.disp": "Écran",
      "doc.kicker": "Documentation",
      "doc.title": "Documentation en quatre langues",
      "doc.d1t": "README (chinois)",
      "doc.d1b": "Aperçu des fonctions, installation, démarrage rapide, CLI et MCP, FAQ",
      "doc.d2b": "Features, installation, quick start, CLI & MCP, FAQ",
      "doc.d3b": "Fonctionnalités, installation, démarrage rapide, CLI / MCP, FAQ (README japonais)",
      "doc.d4b": "Aperçu des fonctions, installation, démarrage rapide, CLI et MCP, FAQ",
      "doc.d5t": "Guide d’installation",
      "doc.d5b": "Configuration requise, installation, mise à niveau, désinstallation, FAQ",
      "doc.d6t": "Journal des modifications",
      "doc.d6b": "Historique des versions et limites connues",
      "doc.note": "Dépôt de publication : installeurs, documentation et manifeste de mise à jour uniquement — le code source n’est pas public. La méthode Weibull ILI suit Davis, J. D. (1998), Appetite 31(3), 435–447 (DOI: 10.1006/appe.1998.0167).",
      "foot.tagline": "Conçu pour la recherche en neurosciences",
      "foot.linksLabel": "Liens de bas de page",
      "foot.repo": "Dépôt GitHub",
      "foot.releases": "Releases",
      "foot.license": "Licence MIT",
      "foot.disclaimer": "Outil de recherche — non destiné au diagnostic clinique."
    }
  };

  var LANGS = ["zh", "en", "ja", "fr"];
  var LANG_HTML = { zh: "zh-CN", en: "en", ja: "ja", fr: "fr" };
  var LS_THEME = "lickometer.theme";
  var LS_LANG = "lickometer.lang";

  function store(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* per-viewer only */ }
  }
  function recall(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function tr(lang, key) {
    var d = I18N[lang];
    if (d && Object.prototype.hasOwnProperty.call(d, key)) { return d[key]; }
    return I18N.zh[key];
  }

  /* ---------- language switching ---------- */
  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) { lang = "zh"; }
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var text = tr(lang, el.getAttribute("data-i18n"));
      if (typeof text === "string") { el.textContent = text; }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(/[;,]/).forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length !== 2) { return; }
        var text = tr(lang, bits[1].trim());
        if (typeof text === "string") {
          el.setAttribute(bits[0].trim(), text.replace(/<[^>]*>/g, ""));
        }
      });
    });
    document.documentElement.lang = LANG_HTML[lang];
    document.title = tr(lang, "meta.title");
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    store(LS_LANG, lang);
  }

  /* ---------- theme ---------- */
  function currentTheme() {
    var saved = recall(LS_THEME);
    if (saved === "light" || saved === "dark") { return saved; }
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch (e) { return "light"; }
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.querySelector(".theme-btn");
    if (btn) { btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false"); }
  }

  /* ---------- gallery tabs ---------- */
  function initTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
    if (!tabs.length) { return; }
    function activate(tab, focus) {
      tabs.forEach(function (t) {
        var panel = document.getElementById(t.getAttribute("data-panel"));
        var on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        if (panel) {
          panel.classList.toggle("is-active", on);
          if (on) { panel.removeAttribute("hidden"); } else { panel.hidden = true; }
        }
      });
      if (focus) { tab.focus(); }
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { activate(tab, false); });
      tab.addEventListener("keydown", function (ev) {
        var next = null;
        if (ev.key === "ArrowRight") { next = tabs[(i + 1) % tabs.length]; }
        else if (ev.key === "ArrowLeft") { next = tabs[(i - 1 + tabs.length) % tabs.length]; }
        else if (ev.key === "Home") { next = tabs[0]; }
        else if (ev.key === "End") { next = tabs[tabs.length - 1]; }
        if (next) { ev.preventDefault(); activate(next, true); }
      });
    });
    // JS owns the initial state so hand-written hidden flags cannot drift.
    var initial = tabs.filter(function (t) { return t.classList.contains("is-active"); })[0] || tabs[0];
    activate(initial, false);
  }

  /* ---------- mobile nav ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) { return; }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (ev) {
      if (ev.target.closest && ev.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    applyTheme(currentTheme());
    var themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(now);
        store(LS_THEME, now);
      });
    }
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
    });
    initTabs();
    initNav();
    applyLang(recall(LS_LANG) || "zh");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
