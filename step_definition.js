var fs = require('./fs');

module.exports.generate = function (name) {
    if (name === undefined) {
        name = 'custom'
    }
    var folderPath = './' + name + '_feature/step_definitions/';
    fs.createFolder(folderPath);
    fileName = folderPath + name + '_steps.rb';
    var fileContent = 'require "selenium-cucumber"\n';
    fileContent += 'require_relative "../page_objects/' + name + '_page.rb"\n';
    fs.writeFile(fileName, fileContent);
}