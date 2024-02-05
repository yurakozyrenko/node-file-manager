import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import path from 'path';
import { rename } from 'fs/promises';

const renameFile = async (source, newName) => {
    try {
        printCurrentWorkingDirectory();

        const pathToFile = path.resolve(source);
        const { dir } = path.parse(pathToFile);
        const pathToNewNameFile = path.resolve(dir, newName);
        await rename(pathToFile, pathToNewNameFile);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default renameFile;
