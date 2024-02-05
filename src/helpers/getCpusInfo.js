import os from 'node:os';

const cpusInfo = () => {
    const cpus = os.cpus();
    console.log(`Total CPUs: ${cpus.length}`);
    const data = cpus.map(({ model, speed }) => ({
        model,
        speed: `${speed / 1000} GHz`,
    }));
    return data;
};

export default cpusInfo;
