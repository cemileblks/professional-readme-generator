// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid name for your project");
            }
            return true;

        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your project:',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid project description");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can users install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should users use your application?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter valid usage instructions");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you want to provide credits for any contributors or third-party resources?(Click enter if None)',
        default: () => "N/A",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
            'MIT',
            'Apache-2.0',
            'GPL-3.0',
            'BSD-3-Clause',
            'CC0-1.0',
            'LGPL-3.0',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any tests for your application? How can users run them?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid GitHub username");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid email address");
            }
            return true;
        }
    }
]

module.exports = questions;