function createLicense(data) {

  return `![Inquirer package](https://img.shields.io/badge/LICENSE-${data}-brightgreen).`

  //if none return ''
  
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ${data.description}
          ${data.motivation}
          ${data.userStory}
          ${data.usage}
          ${data.credits}
          ${createLicense(data.license)}

`;
}

module.exports = generateMarkdown;
