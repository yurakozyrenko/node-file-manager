import { chdir } from 'process';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';

const upDirectory = async () => {
    try {
        chdir('..');
        printCurrentWorkingDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
};

export default upDirectory;
