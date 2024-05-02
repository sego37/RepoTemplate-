// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the TITLE of your README file?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please DESCRIBE your README file.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the INSTALLATION INSTRUCTIONS?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the USAGE INSTRUCTIONS?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the CONTRIBUTION GUILDLINES?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the TESTING INSTRUCTIONS?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the LICENSE used for this project?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'links',
            message: 'Enter URL LINKS.',
        }
    ]);
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
const init = () => {
    questions()
       .then((answers) => writeFile('README.md', generateMarkdown(answers)))
       .then(() => console.log('Successfully wrote to README.md'))
       .catch((err) => console.error(err));
};

// Function call to initialize app
init();
