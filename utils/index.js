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
        name: 'installation',
        message: 'Elaborate on any installation procedures necessary for potential users.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide steps and instructions for use.'
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'Provide a brief User Story'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation to create your project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide the names of those who helped you with this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose an appropriate license from the list below',
        choices: ['MIT', 'Apache 2.0', 'none']
    },
    {
        type: 'input',
        name: 'contributingGuidelines',
        message: 'Explain the guidelines associated with contributing to this project and how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples on how a potential user might use your application.'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email for users to reach you for further questions?'
    }

    
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
        const {title, description, motivation, userStory, usage, credits, license} = data; //re-order when done with all questions
        console.log(data)
        writeToFile('README.md', generateMarkdown(data));
    })


}

// function call to initialize program
init();

