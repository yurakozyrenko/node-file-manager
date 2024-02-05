import { pipeline } from 'stream/promises';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import isDirectory from '../helpers/isDirectory.js';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { unlink } from 'fs/promises';

const moveFile = async (source, destination) => {
    try {
        printCurrentWorkingDirectory();

        const directory = await isDirectory(destination);
        if (!directory) throw new Error('Invalid input');

        const pathToFile = path.resolve(source);
        const { base } = path.parse(pathToFile);
        const pathToDestination = path.resolve(destination, base);
        const readStream = createReadStream(pathToFile);
        const writeStream = createWriteStream(pathToDestination);

        await pipeline(readStream, writeStream);
        await unlink(pathToFile);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default moveFile;
