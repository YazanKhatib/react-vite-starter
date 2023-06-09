#! /usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

if (process.argv.length < 3) {
    console.log('Provide a name for your app');
    console.log('For example :');
    console.log('    npx react-vite-starter my-app');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPO = 'https://github.com/YazanKhatib/react-vite-starter.git';

if (projectName !== '.') {
    try {
        fs.mkdirSync(projectPath);
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log(projectName);
            console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
        } else {
            console.log(err);
        }
        process.exit(1);
    }
}

async function main() {
    try {
        console.log('Downloading files...');
        execSync(`git clone --depth 1 ${GIT_REPO} ${projectPath}`);

        if (projectName !== '.') {
            process.chdir(projectPath);
        }

        console.log('Installing dependencies...');
        execSync('yarn install');

        console.log('Removing useless files');
        execSync('npx rimraf ./.git');
        execSync('npx rimraf ./bin');
        execSync('npx rimraf ./.github/workflows');

        console.log('The installation is successful 🚀');
    } catch (error) {
        console.log(error);
    }
}

main();
