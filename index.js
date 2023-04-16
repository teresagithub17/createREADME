// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

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
function writeToFile(data) {
    return `
  
# ${data.title}

## Description
  ${data.description}
  
  [A deployed version can be viewed here.](${data.URL})
  
---
## Table of Contents
1. [Usage](#about)
    * [User Story](#userStory)
    * [Acceptance criteria](#acceptanceCriteria)
    * [Visuals](#visuals)
    * [Build](#build)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
---
## About
  #### ${data.about}
---
## User Story
  
---
## Acceptance Criteria
  
  
---
## Screenshot
  ![]()
---
## Installation:
  ${data.installation}
  To clone the repo:
  
      git clone ${data.clone}
  
---
## License
  License used for this project - ${data.license}
  ${data.licenseBadge}
  * For more information on license types, please reference this [website](https: //choosealicense.com/](https://choosealicense.com/).
---
## Contributing
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.
---
## Tests
  * ${data.test}
---
## Authors and Acknowledgments
  * ${data.author}
---
## Contact Information
If you have further questions please reach out to the following contact information:
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
  
`;

}

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
  let readMeData = writeToFile(answers);
  await writeFileAsync("created-README.md", readMeData);
  console.log(answers)
  console.log('Success! Your README.md file has been created!')
}


// Function call to initialize app
init();

