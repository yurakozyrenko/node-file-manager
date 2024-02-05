import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';
import { EOL, userInfo } from 'node:os';
import { arch } from 'process';
import cpusInfo from '../helpers/getCpusInfo.js';

const { username, homedir } = userInfo();

const getOSInfo = async (param) => {
    try {
        if (!param) throw new Error('Invalid input');

        printCurrentWorkingDirectory();

        param.forEach((element) => {
            switch (element) {
                case '--EOL':
                    console.log('Default system EOL: ', JSON.stringify(EOL));
                    break;
                case '--cpus':
                    console.table(cpusInfo());
                    break;
                case '--homedir':
                    console.log('Home directory: ', homedir);
                    break;

                case '--username':
                    console.log('User name: ', username);
                    break;

                case '--architecture':
                    console.log('Architecture: ', arch);
                    break;
                default:
                    throw new Error('Invalid input');
            }
        });
    } catch (error) {
        console.error('Operation failed');
    }
};

export default getOSInfo;
