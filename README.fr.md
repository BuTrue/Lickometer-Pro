<div align="center">

[中文](README.md) | [English](README.en.md) | [日本語](README.ja.md) | Français

# Lickometer Pro

**Édition enrichie par IA** · Analyse de la microstructure du léchage

![Version](https://img.shields.io/badge/version-1.7.0-blue.svg)
![Licence](https://img.shields.io/badge/licence-MIT-yellow.svg)
![Plateforme](https://img.shields.io/badge/plateforme-Windows%2010%2F11%20x64-lightgrey.svg)
![Interface](https://img.shields.io/badge/interface-fran%C3%A7ais%20disponible-brightgreen.svg)
![Moteur](https://img.shields.io/badge/moteur-Python%203.10%20%7C%203.12-informational.svg)

*Outil professionnel d'analyse de la microstructure du léchage chez le rongeur*

*Téléchargement · Documentation · Manifeste de mise à jour — le code source n'est pas publié dans ce dépôt.*

</div>

---

> **Dépôt de publication.** Ce dépôt ne contient que les binaires installables, la documentation, les captures d'écran et le manifeste d'auto-mise à jour de Lickometer Pro. Il ne contient aucun code source. Les captures d'écran présentées ici proviennent de l'application réelle, version **1.7.0**.

---

## Sommaire

- [Présentation](#présentation)
- [Pourquoi Lickometer Pro](#pourquoi-lickometer-pro)
- [Fonctionnalités clés](#fonctionnalités-clés)
- [Captures d'écran](#captures-décran)
- [Configurations requises](#configurations-requises)
- [Installation](#installation)
- [Mise à jour automatique](#mise-à-jour-automatique)
- [Démarrage rapide](#démarrage-rapide)
- [Formats de données pris en charge](#formats-de-données-pris-en-charge)
- [Concepts d'analyse](#concepts-danalyse)
- [Interfaces d'automatisation (CLI & MCP)](#interfaces-dautomatisation-cli--mcp)
- [Licence](#licence)
- [Citation & remerciements](#citation--remerciements)
- [Questions fréquentes](#questions-fréquentes)

---

## Présentation

**Lickometer Pro** est une application de neurosciences destinée à l'analyse complète des données de comportement de léchage chez le rongeur. Développée en Python avec **PySide6**, elle offre aux chercheurs les outils nécessaires pour traiter par lot les enregistrements de léchage, détecter les **bouffées** (*bursts*), caractériser la structure des **repas** (*meals*), et visualiser la **microstructure du léchage** sous forme de graphiques prêts pour la publication.

Le logiciel met en œuvre des méthodologies établies de la littérature en neurosciences du comportement, notamment l'**ajustement d'une loi de Weibull** sur l'**intervalle entre léchages** (ILI, *inter-lick interval*) décrit par Davis (1998), ainsi que des algorithmes de détection de bouffées inspirés du cadre `trompy/lickcalc` du McCutcheon Lab.

L'interface applicative est **en chinois** ; l'**assistant d'installation est également en chinois**, et fonctionne au niveau de l'utilisateur courant, **sans droits administrateur**. Cette page est disponible en [中文](README.md), [English](README.en.md), [日本語](README.ja.md) et en français (ici).

---

## Pourquoi Lickometer Pro

- Traiter de grands jeux de données grâce à l'**analyse par lot** de dossiers entiers.
- Générer automatiquement des **visualisations de qualité publication** (14 types de graphiques).
- Appliquer des **algorithmes validés** en neurosciences avec des paramètres configurables.
- Analyser aussi bien le **double biberon** (préférence, polarité positive/négative) que le **biberon unique**.
- Exporter les résultats vers **Excel multi-feuilles** pour des analyses statistiques complémentaires.
- Entraîner un **modèle d'IA** (forêt aléatoire / arbres extra) pour la classification automatique des motifs de léchage, puis l'exécuter en **inférence ONNX**.
- Bénéficier d'une **mise à jour automatique** avec réinstallation incrémentielle.

---

## Fonctionnalités clés

### Traitement des données
- **Traitement par lot multi-fichiers** — analyser des centaines de fichiers simultanément avec suivi de progression ; un fichier corrompu n'interrompt jamais le lot.
- **Analyse de préférence à deux biberons** — comparer la consommation entre plusieurs canaux, avec statistiques automatiques.
- **Classification des léchages par IA** — modèle d'apprentissage automatique pour la reconnaissance intelligente des motifs de léchage.
- **Prise en charge native LabChart (`.adicht`)** — import direct des enregistrements multi-jours, multi-canaux et multi-*records* via le SDK officiel ADInstruments, avec axe temporel global tenant compte des intervalles entre *records*.

### Analyse des bouffées et des repas
- **Détection des bouffées / clusters** — seuil d'ILI configurable avec paramètres ajustables (par défaut : intervalle de bouffée 1,0 s, minimum 2 léchages).
- **Analyse de la structure des repas** — identification et caractérisation d'épisodes complets de prise alimentaire (critère de coupure fixe de 300 s dans l'interface graphique).
- **Fréquence intra-bouffée** — mesure précise du taux de léchage à l'intérieur d'une bouffée.

### Analyse statistique
- **Ajustement de la loi de Weibull** — modélisation des distributions d'ILI (méthodologie Davis 1998).
- **Statistiques descriptives** — rapports complets couvrant plus de **30 indicateurs** de microstructure.
- **Analyse de la consommation jour/nuit** — rythmes circadiens avec profils d'activité sur 24 heures.

### Visualisation
- **Diagrammes en peigne (*raster*)** — visualisation temporelle des événements de léchage.
- **Courbes cumulatives de léchage** — graphiques d'accumulation en temps réel.
- **Cartes thermiques (*heat maps*)** — motifs d'activité sur toute la séance.
- **Graphiques interactifs intégrés** — sans fenêtre popup ; les modifications de paramètres prennent effet à l'analyse suivante.
- **14 types de graphiques** disponibles (peigne, courbe cumulative, carte thermique, probabilité de bouffée, corrélation, etc.).

### Expérience utilisateur
- **Thème clair piloté par jetons** — palette lavande/neutre cohérente avec couleurs de statut sémantiques.
- **Export Excel multi-feuilles** — sortie structurée pour une analyse complémentaire.
- **Interface professionnelle** — espace de travail à onglets (aperçu / graphiques / données / journal), bandeau d'indicateurs clés (KPI), graphiques intégrés, fichiers récents, raccourcis de menu et retours de progression non bloquants.
- **Mise à jour automatique** — vérification au démarrage, téléchargement contrôlé et réinstallation incrémentielle.

---

## Captures d'écran

| Fenêtre principale (aperçu) | Après analyse |
|---|---|
| ![Aperçu](docs/images/screenshot-overview.png) | ![Graphiques](docs/images/screenshot-plots.png) |

| Import LabChart `.adicht` | Traitement par lot |
|---|---|
| ![LabChart](docs/images/screenshot-labchart.png) | ![Lot](docs/images/dialog-batch.png) |

| Tableau de bord statistiques | Entraîneur IA |
|---|---|
| ![Statistiques](docs/images/dialog-statistics.png) | ![Entraîneur](docs/images/dialog-trainer.png) |

| Probabilité de bouffée | Courbe cumulative |
|---|---|
| ![Probabilité de bouffée](docs/images/plot-burst-probability.png) | ![Courbe cumulative](docs/images/plot-cumulative.png) |

---

## Configurations requises

| Exigence | Minimale | Recommandée |
|---|---|---|
| **Système d'exploitation** | Windows 10 x64 | Windows 11 x64 |
| **Mémoire vive** | 4 Go | 8 Go |
| **Disque** | 1 Go d'espace libre | 2 Go |
| **Écran** | 1280 × 720 | 1920 × 1080 |

> L'application est distribuée sous forme d'**exécutable autonome** : aucune installation de Python n'est nécessaire pour l'utilisateur final. L'installation est **au niveau de l'utilisateur courant**, sans invite UAC ni droits administrateur.

---

## Installation

1. Ouvrez la page [Dernière version](https://github.com/BuTrue/Lickometer-Pro/releases/latest).
2. Téléchargez `LickometerPro_Setup_1.7.0.exe` (Windows x64).
3. Double-cliquez pour lancer l'exécutable ; l'**assistant d'installation est en chinois**, cliquez sur « Suivant » (*下一步*) à chaque étape.
4. L'installation s'effectue **pour l'utilisateur courant**, sans droits administrateur.
5. Lancez **Lickometer Pro** depuis le menu Démarrer ou le raccourci de bureau.

> Le fichier d'installation n'est pas signé : certains antivirus peuvent signaler un éditeur inconnu. Vous pouvez choisir « Exécuter quand même », ou vérifier l'empreinte **SHA-256** publiée sur la page des versions.

---

## Mise à jour automatique

- Au **démarrage**, l'application vérifie automatiquement la présence d'une nouvelle version ; vous pouvez aussi déclencher manuellement la vérification depuis le menu « ⋯ → Vérifier les mises à jour ».
- À la découverte d'une nouvelle version, cliquez sur « Télécharger maintenant » ; le téléchargement est suivi d'une **vérification SHA-256 obligatoire**, puis d'une **réinstallation silencieuse incrémentielle** et d'un redémarrage automatique.
- **Mise à jour manuelle** : exécutez simplement le nouvel installateur, qui installe dans le même dossier et écrase les anciens fichiers.
- Les données utilisateur sont conservées dans `%APPDATA%\LickometerPro` et **ne sont jamais supprimées** lors d'une mise à jour.
- Le **modèle d'IA peut être mis à jour indépendamment** du logiciel, via le canal `model` du manifeste.

La source de données de l'auto-mise à jour est le fichier [`update/manifest.json`](update/manifest.json) de ce dépôt, lu par défaut à l'adresse :

```
https://raw.githubusercontent.com/BuTrue/Lickometer-Pro/main/update/manifest.json
```

Vous pouvez rediriger le client vers un miroir avec la variable d'environnement `LICKOMETER_UPDATE_URL`. Le manifeste est généré automatiquement ; il n'est pas destiné à être modifié à la main. Les notes de version détaillées se trouvent dans le dossier [`release-notes/`](release-notes/).

---

## Démarrage rapide

1. **Installer et lancer** : suivez les [étapes d'installation](#installation) ci-dessus, puis ouvrez **Lickometer Pro**.
2. **Charger vos données** : cliquez sur **打开数据** (*Ouvrir les données*) pour un fichier `.csv`, `.txt`, `.xlsx` ou `.adicht`. Pour LabChart, un tableau de rôle des canaux s'affiche (统计 / 辅助展示 / 忽略 — à analyser / affichage auxiliaire / ignorer) avec un aperçu du signal en direct ; les canaux auxiliaires sont affichés mais non analysés.
3. **Régler les paramètres** : ajustez la détection, les bouffées, l'IA et les paramètres expérimentaux dans le panneau de gauche.
4. **Analyser et explorer** : lancez l'analyse, consultez le bandeau KPI et les graphiques groupés, puis exportez vers Excel.

---

## Formats de données pris en charge

| Format | Détail |
|---|---|
| **TXT / CSV** | Enregistrements texte de léchage (horodatages / signaux). |
| **XLSX** | Classeurs Excel de données de léchage. |
| **LabChart `.adicht`** | Import natif multi-canaux, multi-*records*, avec détection des canaux de consommation à partir du nom du canal et de la forme du signal. |

En mode **double biberon**, les pics positifs correspondent au biberon B1 (eau pure) et les pics négatifs au biberon B2. En mode **biberon unique**, un choix de polarité (`pos` / `neg`) est appliqué.

---

## Concepts d'analyse

- **ILI (intervalle entre léchages)** — distribution des intervalles temporels entre léchages consécutifs.
- **Bouffée (*burst*)** — groupe de léchages séparés par de courts intervalles, délimité par un seuil d'ILI configurable.
- **Repas (*meal*)** — enchaînement de bouffées séparées par des coupures plus longues (critère de coupure du repas).
- **Fréquence intra-bouffée** — taux de léchage mesuré à l'intérieur d'une bouffée.
- **Ajustement de Weibull** — modélisation de la distribution d'ILI selon la méthodologie de Davis (1998).
- **Classification par IA** — un classifieur entraîné dans l'application (étiquetage → entraînement → export ONNX → inférence) filtre les événements de léchage. `ExtraTrees` est utilisé en dessous de 10 000 lignes étiquetées, `HistGradientBoosting` au-dessus ; l'export ONNX requiert `ExtraTrees`. Si le modèle n'a pu être chargé, l'application avertit et revient à la détection par seuil.

---

## Interfaces d'automatisation (CLI & MCP)

Le moteur d'analyse est également exposé **sans interface graphique**, afin que des scripts ou des agents puissent lancer des analyses directement. Ces interfaces accompagnent l'édition **source** du logiciel (le présent dépôt ne contient que la documentation, les captures d'écran, l'installateur et le manifeste de mise à jour). La syntaxe documentée est la suivante.

**Ligne de commande (CLI)** — sortie JSON par défaut, commandes `analyze`, `batch` et `compare` :

```bash
# Depuis une installation source (dépôt de développement)
python cli.py analyze donnees.csv            # double biberon par défaut
python cli.py analyze donnees.txt --single --polarity pos --format table
python cli.py analyze donnees.txt --with-ili-gaussian   # ILI gaussien / pics / plages
python cli.py batch a.txt b.txt c.txt        # tableau JSON
python cli.py compare a.txt b.txt c.txt --bottle b1     # moyenne / EME / médiane
```

**Serveur MCP (stdio)** — lancé via `python mcp_server.py`, il expose aux clients compatibles MCP les outils `analyze_file`, `batch_analyze`, `compare_files`, `compare_groups`, `compute_burst_details`, `exclude_long_licks`, `compute_pca`, `compute_activity_heatmap`, `compute_ili_gaussian` et `get_info`. Enregistrez le serveur dans votre configuration MCP pour que des agents puissent appeler l'analyse sans interface graphique. Les trois chemins d'accès (GUI, CLI, MCP) partagent le même moteur, donc les résultats sont identiques.

---

## Licence

Distribué sous **licence MIT**. Le texte complet figure dans [`LICENSE.txt`](LICENSE.txt).

---

## Citation & remerciements

### Références académiques

Si vous utilisez Lickometer Pro dans vos travaux de recherche, veuillez citer :

1. **Méthode d'analyse de Weibull** — Davis, J. D. (1998). A model of the accumulation of internal stimulation in the rat: The satiating effect of food. *Appetite*, 31(3), 435-447. <https://doi.org/10.1006/appe.1998.0167>

2. **Algorithme de détection de bouffées** — McCutcheon Lab. `trompy/lickcalc` — un paquet Python pour l'analyse de la microstructure du léchage. <https://github.com/mccutcheonlab/trompy>

### Remerciements

Nous remercions la communauté open-source pour l'excellent écosystème scientifique Python qui rend cet outil possible, en particulier les équipes de **PySide6**, de **NumPy**, **SciPy**, **scikit-learn**, **pandas** et **matplotlib**, ainsi que le **McCutcheon Lab** pour ses algorithmes ouverts d'analyse du léchage.

---

## Questions fréquentes

**Q : Quels formats de données Lickometer Pro prend-il en charge ?**
R : TXT, CSV, XLSX et les enregistrements LabChart `.adicht` natifs (multi-canaux, multi-*records*).

**Q : L'application nécessite-t-elle Python sur la machine ?**
R : Non. Le paquet est un exécutable autonome pour Windows 10/11 x64 ; aucune installation de Python n'est requise pour l'utilisateur final.

**Q : L'installation a-t-elle besoin des droits administrateur ?**
R : Non. L'installation est au niveau de l'utilisateur courant et ne déclenche aucune invite UAC.

**Q : En quoi l'IA diffère-t-elle de la détection par seuil ?**
R : La détection par seuil utilise uniquement l'ILI ; le classifieur IA ajoute une reconnaissance de motifs entraînée sur les microstructures de léchage. Si le modèle est indisponible, l'application revient automatiquement à la détection par seuil.

**Q : Le modèle d'IA fonctionne-t-il avec d'autres espèces (par exemple la souris) ?**
R : Oui. Le classifieur est entraîné sur des caractéristiques générales de microstructure du léchage et peut être adapté à tout rongeur avec des données d'entraînement appropriées.

**Q : Comment signaler un bug ou demander une fonctionnalité ?**
R : Utilisez le suivi des *issues* du dépôt GitHub du projet.

---

<div align="center">

**Conçu pour la recherche en neurosciences**

*Lickometer Pro © 2025*

[中文](README.md) · [English](README.en.md) · [日本語](README.ja.md) · Français

</div>
