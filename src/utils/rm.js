import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import { unlink } from 'fs/promises';
import path from 'path';

const deleteFile = async ([url]) => {
    try {
        printCurrentWorkingDirectory();
        const pathToFile = path.resolve(url);
        await unlink(pathToFile);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default deleteFile;
