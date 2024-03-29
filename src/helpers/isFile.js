import { stat } from 'fs/promises';
import path from 'path';

const isFile = async (data) => {
    try {
        pathDirectory = path.resolve(data);
        const stats = await stat(pathDirectory);
        return stats.isFile();
    } catch (error) {
        return false;
    }
};

export default isFile;
