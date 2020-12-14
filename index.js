const inquirer = require('inquirer');
const fs = require('fs');

class License {
    constructor(name, badge, lic) {
        this.name = name,
        this.badge = badge,
        this.lic = lic
    }
}

const agplv3 = new License("GNU Affero General Public License v3.0", "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)", "https://choosealicense.com/licenses/agpl-3.0/");
const gplv3 = new License("GNU General Public License v3.0", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "https://choosealicense.com/licenses/gpl-3.0/");
const lgplv3 = new License("GNU Lesser General Public License v3.0", "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)", "https://choosealicense.com/licenses/lgpl-3.0/");
const mozilla = new License("Mozilla Publice License 2.0", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "https://choosealicense.com/licenses/mpl-2.0/");
const apache = new License("Apache License 2.0", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "https://choosealicense.com/licenses/apache-2.0/");
const mit = new License("MIT License", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "https://choosealicense.com/licenses/mit/");
const boost = new License("Boost Software License 1.0", "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "https://choosealicense.com/licenses/bsl-1.0/");
const uni = new License("Unilicense", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "https://choosealicense.com/licenses/unlicense/");

inquirer
  .prompt([
    {
        type: 'input',
        message: "What is your github username? ",
        name: 'hubName',
    },
    {
        type: 'input',
        message: "What is your email address? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's title? ",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project: ',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please provide usage information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines for contributing to your project: ',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Please provide instructions for testing your project: ',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please list any resouces you would like to credit that you used while working on your project: ',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please choose the software license for your project:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unilicense'],
        name: 'license',
    },
  ])
  .then((response) => {

    let chosenLicense;

    if (response.license === 'GNU AGPLv3') {
        chosenLicense = agplv3;
    } else if (response.license = 'GNU GPLv3') {
        chosenLicense = gplv3;
    } else if (response.license = 'GNU LGPLv3') {
        chosenLicense = lgplv3;
    } else if (response.license = 'Mozilla Public License 2.0') {
        chosenLicense = mozilla;
    } else if (response.license = 'Apache License 2.0') {
        chosenLicense = apache;
    } else if (response.license = 'MIT License') {
        chosenLicense = mit;
    } else if (response.license = 'Boost Software License 1.0') {
        chosenLicense = boost;
    } else if (response.license = 'The Unilicense') {
        chosenLicense = uni;
    }

    fs.writeFile('./generatedREADME/README.md',
    `# ${response.title}

## Badges

${chosenLicense.badge}
![languages](https://img.shields.io/github/languages/count/${response.hubName}/${response.title})
![top-language](https://img.shields.io/github/languages/top/${response.hubName}/${response.title})
![repo-size](https://img.shields.io/github/repo-size/${response.hubName}/${response.title})
![open-issues](https://img.shields.io/github/issues-raw/${response.hubName}/${response.title})
![last-commit](https://img.shields.io/github/last-commit/${response.hubName}/${response.title})

## Description

${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${response.install}

## Usage 

${response.usage}

Here are some screenshots:
From Desktop:
![main](./assets/images/mainpage.png)
![defi](./assets/images/defi.png)
![portfolio](./assets/images/portfolio.png)
![hourGraph](./assets/images/hourGraph.png)
![graph](./assets/images/graph.png)
![coin data](./assets/images/bitcoin.png)
![sad cat](./assets/images/honey.png)

From Mobile:
![mobile main](./assets/images/mobile-main.png)
![mobile graph with happy cats](./assets/images/mobile-graph.png)
![silly random coin data](./assets/images/silly-random-mobile.png)

## Credits

${response.credits}

## License

Licensed under the [${chosenLicense.name}](${chosenLicense.lic})

## Contributing

${response.contribute}

## Tests

${response.test}

## Questions

My github profile: https://github.com/${response.hubName}

For any questions about the project, please reach me at: ${response.email}    

---`

/*     `<!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!--   <link href="style.css" rel="stylesheet" type="text/css"> -->
            <title>Portfolio</title>
        </head>

        <body>
            <h2>Portfolio</h2>
            <ul id="inputs">
              <li>Name: ${response.name}</li>
              <li>Location: ${response.location}</li>
              <li>Bio: ${response.bio}</li>
              <li>LinkedIn: ${response.linked}</li>
              <li>Github: ${response.hub}</li>
            </ul>
            <script type="text/javascript" src="index.js"></script>
        </body>

    </html>` */
    , (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('Commit logged!'));
  });