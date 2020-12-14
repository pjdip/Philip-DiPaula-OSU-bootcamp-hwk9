const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Please provide a brief bio: ',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'Please provide your LinkedIn URL: ',
      name: 'linked',
    },
    {
      type: 'input',
      message: 'Please provide your Github URL: ',
      name: 'hub',
    },
  ])
  .then((response) => {

    fs.writeFile('index.html', `
    <!DOCTYPE html>
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

    </html>`
    , (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('Commit logged!'));
  });