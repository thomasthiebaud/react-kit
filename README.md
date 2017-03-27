[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/thomasthiebaud/react-kit.svg)](https://travis-ci.org/thomasthiebaud/react-kit)
[![codecov](https://codecov.io/gh/thomasthiebaud/react-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/thomasthiebaud/react-kit)

---

# Setup

This project was tested with nodejs version `7.6.0`. You can easily install this version using [nvm](https://github.com/creationix/nvm) and then running

    nvm install

and then install modules with

    npm install

## Scripts

The following scripts are available

|Name        |Description                                                                                   |
|------------|----------------------------------------------------------------------------------------------|
|build       | Create production bundle                                                                     |
|commit      | Run commitizen to create commit message                                                      |
|lint        | Run linter                                                                                   |
|lint:fix    | Run linter and try to fix errors                                                             |
|start       | Start application in development mode                                                        |
|test        | Run tests and check coverage                                                                 |
|test:report | Run tests and report coverage to `codecov`. `CODECOV_TOKEN` environment variable must be set |

## Commitizen friendly

This code is **commitizen friendly**. If you run

    npm run commit

an utility will help you to write your commit message