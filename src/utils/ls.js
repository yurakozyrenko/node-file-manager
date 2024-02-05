import { readdir } from 'fs/promises';
import path from 'path';
import { cwd } from 'process';
import printCurrentWorkingDirectory from '../helpers/currentDirectory.js';

const list = async () => {
    try {
        printCurrentWorkingDirectory();
        const currentDirectory = path.resolve(cwd());
        const contents = await readdir(currentDirectory, {
            withFileTypes: true,
        });

        const result = contents
            .map((content) => ({
                Name: content.name,
                Type: content.isFile()
                    ? 'file'
                    : content.isDirectory()
                    ? 'directory'
                    : 'unknown',
            }))
            .sort(
                (a, b) =>
                    b.Type.localeCompare(a.Type) || b.Name.localeCompare(a.Name)
            );

        console.table(result);
    } catch (error) {
        console.error('Operation failed');
    }
};

export default list;
