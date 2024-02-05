import { chdir } from 'process';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';

const changeDirectory = async ([pathToDirectory]) => {
    try {
        chdir(pathToDirectory);
        printCurrentWorkingDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
};

export default changeDirectory;
