import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const copyFile = async (source, destination) => {
    try {
        printCurrentWorkingDirectory();

        const pathToFile = path.resolve(source);
        const { base } = path.parse(pathToFile);
        const pathToNewDirectory = path.resolve(destination, base);

        const readStream = createReadStream(pathToFile);
        const writeStream = createWriteStream(pathToNewDirectory);
        await pipeline(readStream, writeStream);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default copyFile;
