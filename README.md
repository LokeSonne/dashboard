# Visuate Dashboard

Simple dashboard for the Visuate app.

## What's included?
* [npm](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) for module bundling in production

Please visit the [wiki](https://github.com/antonybudianto/angular2-starter/wiki) for more details.

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)

- Support Node v4 - latest
- Support npm v3 - latest

You also need [Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

## Installation


Go to the starter directory and install the packages:

```bash
npm install
```

## Start
Let's start up the server, run:

```bash
npm start
```

## Testing


### Unit testing
Just run

```bash
npm test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.


### E2E testing
Firstly start the server:

```bash
npm start
```
To begin testing, run:

```bash
npm run e2e
```
and it'll compile all E2E spec files in `/src/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

> For more details, visit [Continuous Integration  wiki](https://github.com/antonybudianto/angular2-starter/wiki/Continuous-Integration)

You can create production build by running:

```bash
npm run build
```
or you can create production build and then serve it using Browsersync by running:

```bash
npm run serve-build
```
