#!/usr/bin/env node
var stepDefinition = require('./step_definition');
var feature = require('./feature');
var program = require('commander');

program
    .option('F, --no-feature', 'will not create feature file')
    .parse(process.argv)

program
    .command('g [feature name]')
    .description('generate files')
    .action(function (featureName) {
        feature.generate(featureName);
        stepDefinition.generate(featureName);
        pageObject.generate(featureName);
    })

program.parse(process.argv);