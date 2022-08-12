// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require ('inquirer')
const markdown = required ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    { type:'input',
    name: 'title',
    message: "what is your title?",},

    {type: 'input',
    name: 'description',
    message: 'what does this application do?',},

    {type: 'input',
    name: 'installation',
    message: 'how is this app installed',},

    {type:'input',
    name: 'usage',
    message: 'how do you use the application?',},

    {type: 'input',
    name: 'contributing',
    message: 'who contributed to this?',},

    {type:'input',
    name: 'github',
    message: "what is your github username?",},
    
    {type:'list',
    name: 'license',
    message: 'select license',
    choice: ['MIT', 'APACGE 2.0', 'GPL 3.0', 'BSD 3' ]

}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
