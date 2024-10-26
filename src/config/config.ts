// Import necessary modules
import * as fs from 'fs'; // Importing the fs module
import * as yaml from 'js-yaml'; // Importing a YAML parser, ensure you have this package installed

interface Config {
    server: {
        port: number;
    };
}

export function loadConfig(filePath: string): Config {
    const file = fs.readFileSync(filePath, 'utf8'); // Reading the file synchronously
    const config: Config = yaml.load(file) as Config; // Parsing YAML content
    return config;
}
