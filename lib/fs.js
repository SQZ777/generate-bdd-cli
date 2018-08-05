fs = require('fs');

module.exports.writeFile = function (fileName, fileContent) {
    folder = fileName.substr(0,fileName.lastIndexOf('/'));
    if (fs.existsSync(folder)) {
        fs.writeFile(fileName, fileContent, (err) => {
            if (err)
                console.log(err);
            else
                console.log('file:%s', fileName + ' has generated');
        });
    }else{
        this.writeFile(fileName, fileContent);
    }
    
}
module.exports.createFolder = function (folderLocate) {
    fs.mkdir(folderLocate, (err) => {
        if (err)
            console.log(err);
        else
            console.log(folderLocate + ' has generated');
    });
}