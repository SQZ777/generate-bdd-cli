var fs = require('./fs');
var f = require('./bdd_files');

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) {
        return args[n];
    });
};

function BddBuild(featureName) {
    this.featureName = featureName;
    this.featureFolder = "./%s_feature/".replace("%s", featureName);
    this.file = new f(this.featureFolder, featureName);
}

BddBuild.prototype.feature = function feature() {
    fs.createFolder(this.featureFolder);
    fs.writeFile(this.file.featureFileName(), this.file.featureFileContent());
}

BddBuild.prototype.stepDefinitions = function stepDefinitions() {
    var folderPath = this.featureFolder + '/step_definitions/';
    fs.createFolder(folderPath);
    fs.writeFile(this.file.stepsFileName(), this.file.stepsFileContent());
}

BddBuild.prototype.pageObjects = function pageObjects() {
    var folderPath = this.featureFolder + '/page_objects/';
    fs.createFolder(folderPath);
    fs.writeFile(this.file.pageFileName(), this.file.pageFileContent());
}

BddBuild.prototype.platformPageObjects = function platformPageObjects(platform) {
    var folderPath = this.featureFolder + '/page_objects/{0}'.format(platform)
    fs.createFolder(folderPath);
    fs.writeFile(this.file.platformImplementsFileName(platform),
        this.file.platformImplementsFileContent(platform));
    fs.writeFile(this.file.platformElementsFileName(platform),
        this.file.platformElementsFileContent(platform));
}

module.exports = BddBuild;