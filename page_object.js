var fs = require('./fs');
class PageObjects{

}
var folderPath = './' + featureName + '_feature/page_objects/';
module.exports.generate = function (featureName) {
    if (featureName === undefined) {
        featureName = 'custom'
    }
    fs.createFolder(folderPath);
    fileName = folderPath + featureName + '.feature';
    var fileContent = 'Feature: ' + featureName + ' feature\n';
    fs.writeFile(fileName, fileContent);
}

module.exports.generateDesktop = function (featureName) {
    if (featureName === undefined) {
        featureName = 'custom'
    }
    var desktopFolderPath = './' + featureName + '_feature/page_objects/desktop';
    fs.createFolder(desktopFolderPath);
    desktopFileName = desktopFolderPath + featureName + '.feature';
    var fileContent = 'Feature: ' + featureName + ' feature\n';
    fs.writeFile(desktopFileName, fileContent);
}