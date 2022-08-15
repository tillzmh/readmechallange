// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT")
  return "[![License: MIT] (https://img.shields.io/badge/License-MIT-yellow.svg)] (http://www.opensource.org/licenses/MIT)"

  if(license === "APACGE 2.0")
  return "[![License: APACGE] (https://img.shields.io/badge/License-APACGE-blue.svg)] (http://opensource.org/license/APACGE2.0)"

  if(license === "GPL 3.0")
  return "[![License: MIT] (https://img.shields.io/badge/License-GPL-3.0-blue.svg)] (https://www.gnu.org/licenses/gpl-3.0)"

  if(license === "BSD 3")
  return "[![License: BSD] (https://img.shields.io/badge/License-BSD-3-blue.svg)] (https://www.bsd.io)"

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

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
