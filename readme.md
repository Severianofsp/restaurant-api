
<h1 align="center">Restaurant API</h1>

<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/TypeScript-blue">
</p>

## Pre-requisites
  Node.js 18.0.0

  Configure Vs Code to auto format your code with Prettier

  1- Install `Prettier VS Code extension`

  2 - Press `CMD + SHIFT + P` (on MacOS) or `CTRL + Shift + P` (on Windows), then type in preferences open settings

  3 - Select JSON option

  4 - add this informations and save
  ```
  "[typescript]": {
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
},
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
  ```

## Get Starter

Install dependeces:

`npm init`

Run migration to create tables:

`npm run migration:up`

Run application:

`npm run dev`
