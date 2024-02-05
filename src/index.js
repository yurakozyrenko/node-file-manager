import printCurrentWorkingDirectory from './helpers/currentDirectory.js';
import { chdir } from 'process';
import { homedir } from 'os';
import handleUserInput from './utils/input.js';

chdir(homedir());
printCurrentWorkingDirectory();
handleUserInput();
