const parseArgs = () => {
    const arrayArgs = process.argv.slice(2).reduce((acc, element) => {
        if (element.startsWith('--')) {
            acc.push(element);
            return acc;
        }
        return acc;
    }, []);
    let username = arrayArgs.join('');
    username.startsWith('--username')
        ? (username = username.replace('--username=', ''))
        : (username = 'Anonim');
    return username;
};

export default parseArgs;
