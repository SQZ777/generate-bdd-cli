function BddFiles(featureFolder, featureName) {
    this.featureName = featureName;
    this.featureFolder = featureFolder;
}

BddFiles.prototype.featureFileName = function featureFileName() {
    var fileName = this.featureFolder + this.featureName + '.feature';
    return fileName;
}

BddFiles.prototype.featureFileContent = function featureFileContent() {
    var fileContent = 'Feature: {0} feature\n'.format(sentenlize(this.featureName));
    return fileContent;
}

BddFiles.prototype.stepsFileName = function stepsFileName() {
    var fileName = this.featureFolder + '/step_definitions/{0}_steps.rb'.format(this.featureName);
    return fileName;
}

BddFiles.prototype.stepsFileContent = function stepsFileContent() {
    var fileContent = 'require "selenium-cucumber"\n';
    fileContent += 'require_relative "../page_objects/{0}_page.rb"\n'.format(this.featureName);
    return fileContent;
}

BddFiles.prototype.pageFileName = function pageFileName() {
    var fileName = this.featureFolder + '/page_objects/{0}_page.rb'.format(this.featureName);
    return fileName;
}

BddFiles.prototype.pageFileContent = function pageFileContent() {
    var fileContent = 'require "selenium-cucumber"\n';
    var camelizeFeatureName = snakeToCamel(titleCase(this.featureName));
    fileContent += 'require_relative "../page_objects/android/android_{0}_implements.rb"\n'.format(this.featureName);
    fileContent += 'require_relative "../page_objects/ios/ios_{0}_implements.rb"\n'.format(this.featureName);
    fileContent += 'require_relative "../page_objects/desktop/desktop_{0}_implements.rb"\n'.format(this.featureName);
    initialFileContent = '  def initialize\n';
    initialFileContent+= '    extend Desktop{0}Implements if $start_up_platform.platform.eql? "desktop"\n'.format(camelizeFeatureName);
    initialFileContent += '    extend Android{0}Implements if $start_up_platform.platform.eql? "android"\n'.format(camelizeFeatureName);
    initialFileContent += '    extend Ios{0}Implements if $start_up_platform.platform.eql? "iOS"\n'.format(camelizeFeatureName);
    initialFileContent += '  end\n';
    fileContent += "\nclass {0}Page\n{1}end".format(snakeToCamel(titleCase(this.featureName)), initialFileContent);
    return fileContent;
}

BddFiles.prototype.platformImplementsFileName = function platformImplementsFileName(platform) {
    var fileName = "{0}/{0}_{1}_implements.rb".format(platform, this.featureName);
    fileName = this.featureFolder + '/page_objects/' + fileName;
    return fileName;
}

BddFiles.prototype.platformImplementsFileContent = function platformImplementsFileContent(platform) {
    var fileContent = 'require_relative "./{0}_{1}_elements.rb"\n'.format(platform, this.featureName);
    fileContent += "\nmodule {0}{1}Implements\ninclude {0}{1}Elements \n# Implement your steps here...\nend".format(titleCase(platform),
        snakeToCamel(titleCase(this.featureName)));
    return fileContent;
}

BddFiles.prototype.platformElementsFileName = function platformElementsFileName(platform) {
    var fileName = "{0}/{0}_{1}_elements.rb".format(platform, this.featureName);
    fileName = this.featureFolder + '/page_objects/' + fileName;
    return fileName;
}

BddFiles.prototype.platformElementsFileContent = function platformElementsFileContent(platform) {
    var fileContent = "module {0}{1}Elements\n# create your elements here...\nend".format(titleCase(platform),
        snakeToCamel(titleCase(this.featureName)));
    return fileContent;
}


String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) {
        return args[n];
    });
};

function snakeToCamel(s) {
    return s.replace(/(\_\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}

function sentenlize(str) {
    var strArray = str.split('_');
    for (var i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1, strArray[i].length);
    }
    return strArray.join(' ');
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (val) {
        return val.replace(val[0], val[0].toUpperCase());
    }).join(' ');
}

function initialFileContent() {

}
module.exports = BddFiles;