const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

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
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like?',
        choices: ['MIT', 'Apache 2.0', 'none']
    } //re-order
    
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('created README');
      });

}

// function to initialize program
function init() {

    inquirer
    .prompt(questions)
    .then((data) => {
        const {title, description, motivation, userStory, usage, credits, license} = data;
        console.log(data)
        writeToFile('README.md', generateMarkdown(data));
    })


}

// function call to initialize program
init();

