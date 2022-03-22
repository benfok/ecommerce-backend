# Ecommerce Backend Example
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This app functions entirely within the command line as an interface to create, read, update and delete records in a SQL database. The records are representative of employees of a fictional ecommerce company with data about products and associated product categories and tags. The app is written entirely in JavaScript using Node.js with Express.js and Sequelize. The app is deployed using Node.js. 


<details>
<summary><strong>Table of Contents</strong></summary>

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Tests](#tests)
- [Languages, Skills and Credits](#languages-skills-and-credits)
- [Screenshot and Walkthrough](#screenshot-and-walkthrough)
- [Questions and Links](#questions-and-links)
</details>

## Installation
- Clone the repo.
- Navigate to the folder and run `npm init` followed by `npm install` in order to install the dependencies.
- Be sure to add your MySQL username and password to the .env.EXAMPLE file and rename to .env.
- Using your preferred CLI to execute MySQL and run the schema.sql in the db folder to create the database.
- From your terminal, run the index.js file in the seeds folder to populate the database.

## Usage
The application can be run by navigating to the root directory and typing `node index.js` into your terminal. The prompts will appear there.

## License
Distributed under the **MIT** license.

## Contributing Guidelines
Contributions help our open source community to continue to evolve, and any contributions are greatly appreciated. If you have a suggestion that would improve this code please follow the directions below. I require that any and all changes adhere to the Code of Conduct outlined in the [Contributor Covenant](https://www.contributor-covenant.org/).

 - Fork the repo
 - Create your feature branch
 - Commit your changes
 - Push the branch and open a pull request

> _**Note:** Any contributions are understood to be under the same MIT that covers the project. If this is a concern please contact me._

## Tests
There are currently no tests written for this application.

## Languages, Skills and Credits
- JavaScript
- Node.js
- [express](https://www.npmjs.com/package/express) webserver framework for Node.js
- [sequelize](https://www.npmjs.com/package/sequelize) to execute SQL code and CRUD operations
- [mysql2](https://www.npmjs.com/package/mysql2) to initialize the database
- [dotenv](https://www.npmjs.com/package/dotenv) used to host credentials in an environment file 


## Screenshot and Walkthrough
Here are links to Tutorial Videos that show the application in action. If the videos show as blurry, check quality within the video player settings and set it to the highest level.

- [Video 1 - Setting up and connecting to the database. Reading the data.](https://drive.google.com/file/d/1VbmuR5r0QhQLtMjzqYi0zgdwLo9s6fSP/view?usp=sharing)
- [Video 2 - Creating, Updating and Deleting data](https://drive.google.com/file/d/1DyYgrK_KojDkH7sZu0J_FXfEqB_LB9Lu/view?usp=sharing).

## Questions and Links
Please reach out with any questions regarding the application.

The repository in GitHub is [here](https://github.com/benfok/ecommerce-backend)

