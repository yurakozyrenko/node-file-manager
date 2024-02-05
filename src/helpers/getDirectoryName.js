const { dirname } = require('node:path');

const getDirectoryName = (url) => {
    return dirname(getFileName(url));
};

module.exports = getDirectoryName;
