import path from 'path';
import { open } from 'fs/promises';
import { cwd } from 'process';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';

const createFile = async ([newFileName]) => {
    let filehandle;
    try {
        printCurrentWorkingDirectory();
        const pathToFile = path.resolve(cwd(), newFileName);
        filehandle = await open(pathToFile, 'w');
    } catch (error) {
        console.error('Operation failed');
    } finally {
        filehandle?.close();
    }
};

export default createFile;
