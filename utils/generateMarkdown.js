// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ${licenseBadge}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseLink}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${licenseSection}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  How to reach me:
  GitHub: https://github.com/${data.gitHubUsername}
  Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
