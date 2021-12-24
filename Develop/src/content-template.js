function generateReadme (data) {
    return `
#${data.title}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests Instructions
${data.tests}

## License
${data.license.join(', ')}

## Contact
**Github**[https://github.com/${data.github}](https://github.com/${data.github})

**Email**[https://github.com/${data.email}](https://github.com/${data.email})
`;
}

module.exports = generateReadme; 