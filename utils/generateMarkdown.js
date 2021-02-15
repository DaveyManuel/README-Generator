function createLicense(data) {

  return `![Inquirer package](https://img.shields.io/badge/LICENSE-${data}-brightgreen).`

  //if none return ''
  
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Description\n
${data.description}\n
## Table of Contents\n
*[Installation](#Installation)
*[Usage](#Usage)
*[UserStory](#User Story)
*[Motivation](#Motivation)
*[Features](#Features)
*[Credits](#Credits)
*[License](#License)
*[Contributing](#Contributing)
*[Tests](#Tests)
*[Questions](#Questions)\n
## Installation\n
${data.installation}\n
## Usage\n 
${data.usage}\n
## User Story\n
${data.userStory}\n
## Motivation\n
${data.motivation}\n
## Features\n
${data.features}\n
## Credits\n
${data.credits}\n
## License\n
${createLicense(data.license)}\n
## Contributing\n
${data.contributionGuidelines}\n
## Tests\n
${data.tests}\n
## Questions\n
${data.gitHub}\n
${data.email}

`;
}

module.exports = generateMarkdown;
