var fs = require('./fs');

module.exports.generate = function (featureName) {
    if (featureName === undefined) {
        featureName = 'custom'
    }
    var folderPath = './' + featureName + '_feature/step_definitions/';
    fs.createFolder(folderPath);
    fileName = folderPath + featureName + '_steps.rb';
    var fileContent = 'require "selenium-cucumber"\n';
    fileContent += 'require_relative "../page_objects/' + featureName + '_page.rb"\n';
    fs.writeFile(fileName, fileContent);
}