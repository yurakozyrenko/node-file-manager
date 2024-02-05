import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import path from 'path';
import isDirectory from '../helpers/isDirectory.js';
import isFile from '../helpers/isFile.js';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';

const gzip = createGzip();

const compressFile = async (args) => {
    try {
        const [source, destination] = args;
        printCurrentWorkingDirectory();

        const directory = await isDirectory(destination);
        if (!directory) throw new Error('Invalid input');

        const file = await isFile(source);
        if (!file) throw new Error('Invalid input');

        const pathToFile = path.resolve(source);
        const { name } = path.parse(pathToFile);
        const fileName = `${name}.gz`;

        const pathToDestination = path.resolve(destination, fileName);
        const readStream = createReadStream(pathToFile);
        const writeStream = createWriteStream(pathToDestination);
        await pipeline(readStream, gzip, writeStream);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default compressFile;
