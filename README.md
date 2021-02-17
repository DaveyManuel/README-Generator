# README-Generator

## Description

I have created a simple README generator command line application that takes in input from the user and implements it into the README.md. Information that users must provide include name of the project, description, installation and usage guidelines, user story, motivation for the project, features, credits, license, contributing guidelines, tests, and questions. 



## Deployed Link

## Usage

Attached is a screen recorded video showcasing how the application works.

## Logic

### First Steps

For this command-line application I needed to first install the inquirer npm package so that we could properly prompt our user within the terminal. After installation was completed, we were then given a package-lock.json containing all the information for our npm. The next thing I did was add node_modules and DS.store to my gitignore so that any unnecessary files would not be shown in my GitHub repo. 

### generateMarkdown.js

Included within my project are two JavaScript files named generateMarkdown.js and index.js. The generateMarkdown.js is primarily used in order to create the layout for the README and to input the data given by the user. The generateMarkdown function is quite simple in that it is only used to return a skeleton of what the README should look like using a template literal and including the data of what the user provides. One more function implemented within this file is the createLicense function which is used to create a badge based on which License the user chooses. This function is then passed as a template string withing the template literal skeleton of the README under the Description section. The last thing that was needed in the JS file was to export our module for use by our index.js by setting module.exports = generateMarkdown.js.

### index.js

In the index.js file, among the first things needed was to require all of the necessary modules we would need in order to properly execute the command-line application. I first created three const variables set to equal "require ('module/js file')" so that our index file could use the necessary npm modules and generateMarkdown.js. I then used const questions to create an array of objects that contained the info needed for the application to correctly prompt the user within the terminal. In each object is three elements; type, name, and message. The type for all of my questions, except for one, is 'input' which allows the user to type in the answer to the question on their own. For my license question I 