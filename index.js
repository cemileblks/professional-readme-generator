const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions")
const generateBadges = require("./utils/generateBadges")


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated-files/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log('File successfully generated!'))
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            answers.licenseBadge = generateBadges(answers.license)
            const readmeContent = generateMarkdown(answers)
            writeToFile("README.md", readmeContent);
            console.log("Generating README...");
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment");
            } else {
                console.error("Something else went wrong:", error);
            }
        });
}

// function call to initialize program
init();
