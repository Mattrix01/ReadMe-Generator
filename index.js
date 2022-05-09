// TODO: Include packages needed for this application
// bring in the gernerate markdown function and make sure mgenerateMarkdown like function on mini propject template literals example

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
var generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "please provide project title?",
  },
  {
    type: "input",
    name: "github",
    message: "please provide Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "please provide your email?",
  },
  {
    type: "input",
    name: "description",
    message: "please provide project description?",
  },
  {
    type: "input",
    name: "install",
    message: "please provide details on how to install dependencies?",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "please provide details on how to test?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "please provide details on how to use the repository?",
  },
  {
    type: "input",
    name: "contributing",
    message: "please provide details on how to contribute to the project?",
  },
  {
    type: "list",
    name: "license",
    message: "please provide license?",
    choices: ["MIT", "Apache 2.0", "GNU GLPv3", "ISC", "No license"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const readMeString = generateMarkdown({ ...data });
    console.log(readMeString);
    writeToFile("READMESAMPLE.md", readMeString);
  });
}

// Function call to initialize app
init();
