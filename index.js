// Pulling in modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/utils/generateMarkdown.js');

const licenses = [
    'GNU AGPLv3',
    'GNU GPLv3',
    'GNU LGPLv3',
    'Mozilla Public License 2.0',
    'Apache License 2.0',
    'MIT License',
    'Boost Software License 1.0',
    'The Unilicense',
];

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your github username? ",
        name: 'hubName',
    },
    {
        type: 'input',
        message: "What is your email address? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's repository title? ",
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Please enter a description of your project: ',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Please provide installation instructions for your project: ',
        name: 'install',
    },
    {
        type: 'editor',
        message: 'Please provide usage information: ',
        name: 'usage',
    },
    {
        type: 'editor',
        message: 'Please provide guidelines for contributing to your project: ',
        name: 'contribute',
    },
    {
        type: 'editor',
        message: 'Please provide instructions for testing your project: ',
        name: 'test',
    },
    {
        type: 'editor',
        message: 'Please list any resouces you would like to credit that you used while working on your project: ',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please choose the software license for your project:',
        choices: licenses,
        name: 'license',
    },
];

// function to write README file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Commit logged!'));
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('./generatedREADME/README.md', response);
        });
}

init();