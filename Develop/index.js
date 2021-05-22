// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const Choices = require("inquirer/lib/objects/choices");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input"
        message: "What is the name of your project?"
        name: "title"
    },

    {
        type: "input"
        message: "What is the name of your project?"
        name: "description"
    },
    {
        type: "input"
        message:"Please provide usage instructions"
        name: "contribution"
    },

    {
        type: "input"
        message:"Please explain how to test this code."
        name: "test"
    },
    {
        type: "input"
        message: "What is your preferred license of this project?"
        name: "license"
        choices: [
            {
                name: "MIT Lincense",
              },
              {
                name: "Apache License 2.0",
              },
              {
                name: "GNU General Public License",
              },
              {
                name: "Mozilla Public License 2.0",
              },  
        ],
    },
    {
        type: "input"
        message:"What is your Email?"
        name: "email"
    },
    {
        type: "input"
        message:"What is your GitHub username?"
        name: "username"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        fs.writeFile('./outputReadme/README.md', generateMarkdown(data), function (
            err
        ) {
            if (err) {
                return console.log(err);
            }

            console.log('Success!')
            });
        });
    }


// Function call to initialize app
init();
