import path from 'path';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import fs from 'fs';
const readPrintFile = async ([url]) => {
    try {
        printCurrentWorkingDirectory();
        const pathToFile = path.resolve(url);
        const fileStream = fs.createReadStream(pathToFile);
        fileStream.on('data', (data) => {
            console.log(data.toString());
        });
    } catch (error) {
        console.error('Operation failed');
    }
};

export default readPrintFile;
