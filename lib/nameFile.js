const fs = require('fs');

const folderPath = "\examples";

function collectFileNames() {
    existingFiles = fs.readdirSync(folderPath);
    return existingFiles;
};

const nameFileFn = (fileName) => {
    collectFileNames();
    let n = 0;
    while (existingFiles.includes(fileName)) {
        n++;
        fileName = `logo-${n}.svg`;
    }
    return fileName;
}


module.exports = { nameFileFn }