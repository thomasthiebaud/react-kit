[![Build Status](https://travis-ci.org/thomasthiebaud/react-kit.svg)](https://travis-ci.org/thomasthiebaud/react-kit)

---

Do you prefer `es6` ? If so, use the [dedicated branch](https://github.com/thomasthiebaud/react-kit/tree/es6) instead

# Setup

This project was tested with nodejs version `8.9.4`. You can easily install this version using [nvm](https://github.com/creationix/nvm) and then running

    nvm install

and then install modules with

    npm install

## Scripts

The following scripts are available

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
