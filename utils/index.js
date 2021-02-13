const inquirer = require('inquirer')
const fs = require('fs')

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description for your project.'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation to create your project?'
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'Provide a brief User Story'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide steps and instructions for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide the names of those who helped you with this project.'
    }

];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
