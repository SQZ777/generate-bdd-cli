#!/usr/bin/env node
var feature = require('./feature');
var program = require('commander');

program
    .option('F, --no-feature', 'will not create feature file')
    .parse(process.argv)

program
    .command('g [feature name]')
    .description('generate ')
    .action(function (featureName) {
        feature.generate(featureName)
    })

program.parse(process.argv);