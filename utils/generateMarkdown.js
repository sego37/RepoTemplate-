// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
        return '';
    } else {
      const urlencoded = encodeURIComponent(license);
        return `[![License: ${license}](https://img.shields.io/badge/License-${urlencoded}-yellow.svg)](https://opensource.org/licenses/${urlencoded})`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
        return '';
    } else {
        return `## License

\`\`\`
${license}
        
\`\`\` 
`
    }
};

// TODO: Create a function to generate markdown for README

const generateMarkdown = ({title, description, installation, usage, contribution, test, license, github, email, links}) =>
`
${renderLicenseBadge(license)}

# ${title}

## Description
\`\`\`
${description}

\`\`\`
##  Installation

\`\`\`
${installation}

\`\`\`

## Usage

\`\`\`
${usage}

\`\`\`

## Contribution

\`\`\`
${contribution}

\`\`\`

## Test

\`\`\`
${test}

\`\`\`

${renderLicenseSection(license)}

## Github

\`\`\`
${github}

\`\`\`

## Email

\`\`\`
${email}

\`\`\`

## Links

\`\`\`
${links}

\`\`\`
`

module.exports = generateMarkdown;
