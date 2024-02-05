import readline from 'readline';
import parseArgsToUsername from '../helpers/parseArgs.js';
import createFile from './add.js';
import readPrintFile from './cat.js';
import changeDirectory from './cd.js';
import compressFile from './compress.js';
import copyFile from './cp.js';
import decompressFile from './decompress.js';
import calculateHash from './hash.js';
import list from './ls.js';
import moveFile from './mv.js';
import getOSInfo from './os.js';
import deleteFile from './rm.js';
import renameFile from './rn.js';
import upDirectory from './up.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const username = parseArgsToUsername();
console.log(`Welcome to the File Manager, ${username}!`);

const handleUserInput = () => {
    rl.on('line', (choice) => {
        const input = choice.trim();
        const [command, ...args] = input.split(' ');
        switch (command) {
            case 'add':
                createFile(args);
                break;
            case 'cat':
                readPrintFile(args);
                break;
            case 'cp':
                copyFile(args);
                break;
            case 'mv':
                moveFile(args);
                break;
            case 'rm':
                deleteFile(args);
                break;
            case 'rn':
                renameFile(args);
                break;
            case 'os':
                getOSInfo(args);
                break;
            case 'hash':
                calculateHash(args);
                break;
            case 'compress':
                compressFile(args);
                break;
            case 'decompress':
                decompressFile(args);
                break;
            case 'up':
                upDirectory();
                break;
            case 'cd':
                changeDirectory(args);
                break;
            case 'ls':
                list();
                break;
            case '.exit':
                rl.close();
                break;
            default:
                console.log('Invalid input');
        }
    });
};
// Обработка завершения программы
process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});
export default handleUserInput;
