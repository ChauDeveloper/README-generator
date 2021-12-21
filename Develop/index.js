// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },

    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to enter some description information?',
        default: true
      },

      {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
          when: ({ confirmDescription }) => {
            if (confirmDescription) {
              return true;
            } else {
              return false;
            }
          }
      },

      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter installation instructions?',
        default: true
      },

      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
          when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
              return true;
            } else {
              return false;
            }
          }
      },

      {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter usage information?',
        default: true
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage infomation:',
          when: ({ confirmUsage }) => {
            if (confirmUsage) {
              return true;
            } else {
              return false;
            }
          }
      },

      {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to enter usage information?',
        default: true
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'Enter Contributing information:',
          when: ({ confirmContributing }) => {
            if (confirmContributing) {
              return true;
            } else {
              return false;
            }
          }
      },
   
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to enter usage information?',
        default: true
      },

      {
        type: 'input',
        name: 'tests',
        message: 'Enter Tests information:',
          when: ({ confirmTests }) => {
            if (confirmTests) {
              return true;
            } else {
              return false;
            }
          }
      },

      {
        type: 'checkbox',
        name: 'languages',
        message: 'Choose a license:',
        choices: ['Apache License 2.0', 'GNU GPLv3','GNULv2', 'MIT', 'ISC' ]
      },
  
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'email',
        message: 'Enter  your email address: (Required)',
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writetoFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writetoFile ('./README.md', fileContent, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok:true,
                message: 'README file completed!'
            })
        })
    })
}

module.exports = {
      writetoFile: writetoFile,
    };

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
