var fs = require('./fs');

module.exports.generate = function (featureName) {
    if (featureName === undefined) {
        featureName = 'custom'
    }
    var folderPath = './' + featureName + '_feature/';
    fs.createFolder(folderPath);
    fileName = folderPath + featureName + '.feature';
    var fileContent = 'Feature: ' + featureName + ' feature\n';
    fs.writeFile(fileName, fileContent);
}