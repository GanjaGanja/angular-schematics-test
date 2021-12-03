# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### Developing

`npm run build:watch` will watch for changes in .ts files and transpile them into .js files.

`schematics .:hello --dry-run=false` will run this test schematics with prompt.

`ng g ../angular-schematics-test/src/collection.json:hello` will run this test schematics with prompt from another Angular App (it needs to be executed from Angular App).

### Links

Repo is based on good article at https://tomastrajan.medium.com/total-guide-to-custom-angular-schematics-5c50cf90cdb4
