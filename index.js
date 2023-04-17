// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      message: "Please enter a one-sentence description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Please tell us about your project:",
      name: "about",
    },
    {
      type: "input",
      message: "Enter the user story?",
      name: "userStory",
    },
    {
      type: "input",
      message: "Enter the acceptance criteria?",
      name: "acceptanceCriteria",
    },
    {
      type: "input",
      message: "What are the installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the link to clone the repo?",
      name: "clone",
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license you used for this project.",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Boost",
      ],
    },
    {
      type: "input",
      message: "Please enter any testing protocols you used for your project?",
      name: "test",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "URL",
      message: "What is the URL of the live site?",
    },
    {
      type: "input",
      name: "repo",
      message: "What is the URL of the github repo?",
    },
  ];

// TODO: Create a function to write README file


function licenseBadge(value) {
    if (value === "GNU AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } 
    
  }

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  answers.licenseBadge = licenseBadge(answers.license);
  let readMeData = generateMarkdown(answers);
  await writeFileAsync("created-README.md", readMeData);
  console.log(answers)
  console.log('Success! Your README.md file has been created!')
}


// Function call to initialize app
init();

