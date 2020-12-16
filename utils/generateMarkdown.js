// function to generate markdown for README
function generateMarkdown(data) {

    class License {
        constructor(name, badge, info) {
            this.name = name,
            this.badge = badge,
            this.info = info
        }
        static fromName(str) {
            const licenseObj = {
                'GNU AGPLv3': ["GNU Affero General Public License v3.0", "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)", "https://choosealicense.com/licenses/agpl-3.0/"],
                'GNU GPLv3': ["GNU General Public License v3.0", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "https://choosealicense.com/licenses/gpl-3.0/"],
                'GNU LGPLv3': ["GNU Lesser General Public License v3.0", "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)", "https://choosealicense.com/licenses/lgpl-3.0/"],
                'Mozilla Public License 2.0': ["Mozilla Publice License 2.0", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "https://choosealicense.com/licenses/mpl-2.0/"],
                'Apache License 2.0': ["Apache License 2.0", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "https://choosealicense.com/licenses/apache-2.0/"],
                'MIT License': ["MIT License", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "https://choosealicense.com/licenses/mit/"],
                'Boost Software License 1.0': ["Boost Software License 1.0", "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "https://choosealicense.com/licenses/bsl-1.0/"],
                'The Unilicense': ["Unilicense", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "https://choosealicense.com/licenses/unlicense/"]
            }

            return new License(...licenseObj[str]);
        }
    }
    
    let chosenLicense = License.fromName(data.license);

    return `# ${data.title}

${chosenLicense.badge}
![languages](https://img.shields.io/github/languages/count/${data.hubName}/${data.title})
![top-language](https://img.shields.io/github/languages/top/${data.hubName}/${data.title})
![repo-size](https://img.shields.io/github/repo-size/${data.hubName}/${data.title})
![open-issues](https://img.shields.io/github/issues-raw/${data.hubName}/${data.title})
![last-commit](https://img.shields.io/github/last-commit/${data.hubName}/${data.title})

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}

## Usage 

${data.usage}

## Credits

${data.credits}

## License

Licensed under the [${chosenLicense.name}](${chosenLicense.info})

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

My github profile: https://github.com/${data.hubName}

For any questions about the project, please reach me at: ${data.email}    

---`;
}
  
module.exports = generateMarkdown;  