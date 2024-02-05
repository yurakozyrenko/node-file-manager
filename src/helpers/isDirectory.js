import { stat } from 'fs/promises';
import path from 'path';

const isDirectory = async (data) => {
    try {
        console.log(data);

        pathDirectory = path.resolve(data);
        const stats = await stat(pathDirectory);
        return stats.isDirectory();
    } catch (error) {
        return false;
    }
};

export default isDirectory;
