# Musiq Frontend ![Web](https://github.com/dergunovd/music10/workflows/Web/badge.svg)

### Description
Hybrid application (Web and Android) for Musiq

### NPM-scripts
* _start_ - Run application
* _build_ - Build application
* _help_ - Help React native CLI
* _test_ - Test application using Jest
* _test:cov_ - Test application using Jest with coverage
* _lint_ - Lint source using eslint
* _lint:fix_  - Lint source using eslint with autofix
* _format_ - Format source using Prettier
* _android_ - Run Android in Debug mode
* _android:release_ - run Android in Release mode
* _build:android:apk_ - build APK
* _build:android:aab_ - build AAB
* _i18nextParser_ - i18next validate locales
* _deploy_ - Deploy web build
* _deploy:apk_ - Deploy APK file
* _deploy:coverage_ - Deploy test coverage report

## Common
### Getting Started
Rename **/src/utils/~variables.example.ts** to **/src/utils/variables.ts** and change some variables;

`npm install` for install all dependencies

### Testing
`npm run test` for run all unit-tests

or `npm run test:cov` for run unit-tests with coverage

## Web
### Local run
`npm start`

### Deploy
`npm run build`

`npm run deploy`

## Android
### Local run
`npm run android` for debug mode or `npm run android:release` for release mode

### Build
`npm run build:android:apk` for build APK or `npm run build:android:aab` for build AAB
