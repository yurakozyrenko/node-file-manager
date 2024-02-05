import path from 'path';
import isDirectory from '../helpers/isDirectory.js';
import isFile from '../helpers/isFile.js';
import { createReadStream, createWriteStream } from 'fs';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const gzip = createGunzip();

const decompressFile = async (args) => {
    try {
        const [source, destination] = args;
        printCurrentWorkingDirectory();

        const directory = await isDirectory(destination);
        if (!directory) throw new Error('Invalid input');

        const file = await isFile(source);
        if (!file) throw new Error('Invalid input');

        const pathToFile = path.resolve(source);
        const { name, ext } = path.parse(pathToFile);

        if (!ext.includes('.gz')) throw new Error('Invalid input');

        const pathToDestination = path.resolve(destination, name);

        const readStream = createReadStream(pathToFile);
        const writeStream = createWriteStream(pathToDestination);

        await pipeline(readStream, gzip, writeStream);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default decompressFile;
