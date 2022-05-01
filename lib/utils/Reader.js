const fs = require("fs");

class readJsonFile {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = readJsonFile;
