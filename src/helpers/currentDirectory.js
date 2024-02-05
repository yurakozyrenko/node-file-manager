const printCurrentWorkingDirectory = () => {
    const currentWorkingDirectory = process.cwd();
    console.log(`You are currently in ${currentWorkingDirectory}`);
};

export default printCurrentWorkingDirectory;
