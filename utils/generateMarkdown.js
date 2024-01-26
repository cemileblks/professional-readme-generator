// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${data.licenseBadge}

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  This project is licensed under:
  
  ${data.licenseBadge}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the project please contact me on:
   * GitHub: [${data.github}](https://github.com/${data.github})
   * Email: ${data.email}

`;
}

module.exports = generateMarkdown;
