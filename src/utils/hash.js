import crypto from 'crypto';
import path from 'path';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import fs from 'fs';

const calculateHash = async ([filePath]) => {
    try {
        printCurrentWorkingDirectory();
        const pathToFile = path.resolve(filePath);
        const hash = crypto.createHash('sha256');

        const fileStream = fs.createReadStream(pathToFile);

        fileStream.on('data', (data) => {
            hash.update(data);
        });
        fileStream.on('end', () => {
            console.log(hash.digest('hex'));
        });
    } catch (error) {
        console.error('Operation failed');
    }
};

export default calculateHash;
