// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "NONE"){
    return ""
  }else{return `![license](https://img.shields.io/badge/License-${license}-brightgreen.svg)`

}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table  of Contents

  - [title] (#title)
  - [description] (#descriptioon)
  - [installation] (#installation)
  - [usage] (#usage)
  - [contribution] (#contribution)
  - [github] (#github)
  - [license] (#license)

  ## Title
  ${answers.title}

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}

  ## GitHub
  ${answers.github}

  ## License
  ${answers.license}
  

`;
}

module.exports = generateMarkdown;
