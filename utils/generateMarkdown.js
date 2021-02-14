function createLicense(data) {

  return `![Inquirer package](https://img.shields.io/badge/LICENSE-${data}-brightgreen).`

  //if none return ''
  
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
# Description\n
${data.description}\n
# Table of Contents
# Installation
# Usage 
${data.usage}
# User Story
${data.userStory}
# Motivation
${data.motivation}
# Features
# Credits
${data.credits}
# License
${createLicense(data.license)}
# Contributing
# Tests
# Questions

`;
}

module.exports = generateMarkdown;
