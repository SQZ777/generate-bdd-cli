#!/usr/bin/env node

var program = require('commander');
var Build = require('./lib/bdd_build')

program
    .option('F, --no-feature', 'will not create feature file')
    .option('A, --no-android', 'will not create android files')
    .option('I, --no-ios', 'will not create ios files')
    .option('D, --no-desktop', 'will not create desktop files')
    .parse(process.argv)

program
    .command('g [feature name]')
    .description('generate files')
    .action(function (featureName) {
        if (featureName === undefined) {
            featureName = 'custom'
        }
        var build = new Build(featureName);
        build.feature();
        build.stepDefinitions();
        build.pageObjects();
        if (program.android) {
            build.platformPageObjects('android');
        }
        if (program.ios) {
            build.platformPageObjects('ios');
        }
        if (program.desktop) {
            build.platformPageObjects('desktop');
        }
    })

program.parse(process.argv);