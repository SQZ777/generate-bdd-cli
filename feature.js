var fs = require('./fs')

module.exports.generate = function (name) {
    if (name === undefined) {
        name = 'custom'
    }
    var folderPath = './' + name + '_feature/';
    fs.createFolder(folderPath);
    fileName = folderPath + name + '.feature';
    var fileContent = 'Feature: ' + name + ' feature';
    fs.writeFile(fileName, fileContent);
}