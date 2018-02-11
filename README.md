[![Build Status](https://travis-ci.org/thomasthiebaud/react-kit.svg)](https://travis-ci.org/thomasthiebaud/react-kit)

---

# Setup

This project was tested with nodejs version `8.9.4`. You can easily install this version using [nvm](https://github.com/creationix/nvm) and then running

    nvm install

and then install modules with

    npm install

## Scripts

The following scripts are available

"build": "npm run clean; npm run build:prod",
    "build:dev": "webpack --config config/webpack.dev.js",
    "build:prod": "webpack --config config/webpack.prod.js",
    "clean": "rimraf dist/ yarn-error.log npm-debug.log",
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix",
    "start": "npm run start:dev",
    "start:dev": "webpack-dev-server --open --config config/webpack.dev.js",
    "start:prod": "npm run build && http-server --cors dist/"

|Name         |Description                                                                                   |
|-------------|----------------------------------------------------------------------------------------------|
|build        | Alias for `build:prod`                                                                       |
|build:dev    | Create development bundle                                                                    |
|build:prod   | Create optimized production bundle                                                           |
|clean        | Remove existing bundle and error files                                                       |
|lint         | Run linter                                                                                   |
|lint:fix     | Run linter and try to fix errors                                                             |
|start        | Alias for `start:dev`                                                                        |
|start:dev    | Start developemnt server using development bundle                                            |
|start:prod   | Start production server using production bundle                                              |
