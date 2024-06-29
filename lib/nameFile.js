const fs = require('fs');

const folderPath = "\examples";

function collectFileNames() {
   console.log('inside collectfilenames')
    existingFiles = fs.readdirSync(folderPath);
    console.log(existingFiles);
    return existingFiles;
};

const nameFileFn = (fileName) => {
    collectFileNames();
    console.log('inside nameFile function');
    console.log(existingFiles);
    let n = 0;
    while (existingFiles.includes(fileName)) {
        n++;
        fileName = `logo-${n}.svg`;
    }
    return fileName;
}


module.exports = { nameFileFn }