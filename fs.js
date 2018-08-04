fs = require('fs');

module.exports.writeFile = function (fileName, fileContent) {
    fs.writeFile(fileName, fileContent, (err) => {
        if (err)
            console.log(err);
        else
            console.log('file:%s', fileName + ' has generated');
    });
}
module.exports.createFolder = function (folderLocate) {
    fs.mkdir(folderLocate, (err) => {
        if (err)
            console.log(err);
        else
            console.log(folderLocate + ' has generated');
    });
}