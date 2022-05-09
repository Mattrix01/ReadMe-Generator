// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No license") {
    return "";
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return "";
  }
  return `## License 
  
  This project is licenced under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

# Description 

${data.description}

## Installation

${data.install}

## usage

${data.usage}
## Test

${data.test}

## Questions

If you have any questions you can contact me via github ${
    data.github
  } or email on ${data.email}

${renderLicenseSection(data.license)}

`;
}

// making it available for the index
module.exports = generateMarkdown;
