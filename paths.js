function Paths(featureName) {
    this.featureFolder = "./%s_feature/".replace("%s", featureName);
}

Paths.prototype.pageObjectsFolder = function pageObjectsFolder() {
    console.log('page')
    return this.featureFolder + 'page_objects/';
}

Paths.prototype.stepDefinitionsFolder = function stepDefinitionsFolder() {
    console.log('step')
    return this.featureName + 'step_definitions/';
}

module.exports = Paths;

