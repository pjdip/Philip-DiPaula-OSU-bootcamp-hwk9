const inquirer = require('inquirer');
const fs = require('fs');

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
  ])
  .then((response) => {

    fs.writeFile('README.md',
    `# ${response.title}

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
    
    ## License

    ## Contributing

    ${response.contribute}

    ## Tests

    ## Questions

    My github profile: https://github.com/${response.hubName}

    For any questions about the project, please reach me at: ${response.email}

    ## Badges
    
    ![languages](https://img.shields.io/github/languages/count/Settc/CryptoPURRency)
    ![top-language](https://img.shields.io/github/languages/top/Settc/CryptoPURRency)
    ![repo-size](https://img.shields.io/github/repo-size/Settc/CryptoPURRency)
    ![open-issues](https://img.shields.io/github/issues-raw/Settc/CryptoPURRency)
    ![last-commit](https://img.shields.io/github/last-commit/Settc/CryptoPURRency)
    
    
    
    
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