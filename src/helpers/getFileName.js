const { fileURLToPath } = require('node:url');

const getFileName = (url) => {
    return fileURLToPath(url);
};

module.exports = getFileName;
