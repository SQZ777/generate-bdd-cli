#!/usr/bin/env node

var program = require('commander');
var Build = require('./bdd_build')

program
    .option('F, --no-feature', 'will not create feature file')
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
        build.platformPageObjects('android');
        build.platformPageObjects('ios');
        build.platformPageObjects('desktop');
    })

program.parse(process.argv);