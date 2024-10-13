// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check the type of license and return the corresponding badge
  if (license==='MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }

    else if (license==='Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }

    else if (license==='GPL 3.0') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      }

    else if (license==='BSD 3-Clause') {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        }

        else return ''; // This will return an empty string if no license is provided
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check the license type and return the corresponding link
    if (license=== 'MIT') {
    return `\n* [License](https://opensource.org/license/mit)`;
    }
    else if (license=== 'Apache 2.0') {
      return `\n* [License](https://www.apache.org/licenses/LICENSE-2.0)`;
      }
    else if (license=== 'GPL 3.0') {
      return `\n* [License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
      }
    else if (license=== 'BSD 3-Clause') {
      return `\n* [License](https://opensource.org/license/bsd-3-clause)`;
      }
        else return ''; // This returns an empty string if no license if provided
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) { return '';
  }  else {
  return `## License\nThis project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// Return the complete markdown string formatted for the README file
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [GitHub](#github)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## GitHub
${data.github}

## Questions
${data.email}

${renderLicenseLink(data.license)}


`;
}
// Export the generateMarkdown function for use in other modules
export default generateMarkdown;