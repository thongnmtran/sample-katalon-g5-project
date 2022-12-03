<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://avatars.githubusercontent.com/u/28861843?s=200&v=4" alt="Project logo"></a>
</p>

<h3 align="center">Sample Katalon G5 Project</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## 🧐 About <a name = "about"></a>

This is a sample project of Katalon G5

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

#### Install Katalon-G5

- Clone the [Katalon-G5 Repo](https://github.com/katalon-studio/katalon-g5)
- Build & Install Katalon CLI & Katalon Engine Sideload to your system (Run at the root folder of Katalon-G5)

```shell
$ npm install
$ npm run bootstrap
$ npm run incremental-build
$ npm run install-scripts
```

#### Install Katalon G5 Engine Sideload to this package

Run the below command at this folder

```shell
$ npm install
```

## 🎈 Usage <a name="usage"></a>

### Run a test script file

```shell
$ katalon run <filePath> [--browser <browser>]
$ katalon run ./test-cases/openBrowser.ts
$ katalon run ./test-cases/openBrowser.ts --browser chrome
```

### Run a test script with VS Code task

- Open any test case with VS Code
- Press "<kbr>`Ctrl + Shift + P`</kbr>" (on Windows) or "<kbr>`Command + Shift + P`</kbr>" (on Mac) to open `Command Pallete`
- Search and select `"Tasks: Run Task"`
- Search and select `"Run Current Test"`

### Debug a test script with VS Code Debugger

- Open any test case with VS Code
- Press "<kbr>`Ctrl + Shift + D`</kbr>" (on Windows) or "<kbr>`Command + Shift + D`</kbr>" (on Mac) to open `Run and Debug` panel
- Select `"Debug Current Test"`
- Click on the play button to debug the test
