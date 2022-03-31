// TODO: Include packages needed for this application
// bring in the gernerate markdown function and make sure mgenerateMarkdown like function on mini propject template literals example

const inquirer = require("inquirer");
const fs = require("fs");
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
  //   {
  //     type: "input",
  //     name: "projectTitle",
  //     message: "please provide project title?",
  //   },
  //   {
  //     type: "input",
  //     name: "projectTitle",
  //     message: "please provide project title?",
  //   },
  //   {
  //     type: "input",
  //     name: "projectTitle",
  //     message: "please provide project title?",
  //   },
  //   {
  //     type: "input",
  //     name: "projectTitle",
  //     message: "please provide project title?",
  //   },
  //   {
  //     type: "input",
  //     name: "projectTitle",
  //     message: "please provide project title?",
  //   },
  //   {
  //     type: "input",
  //     name: "projectTitle",
  //     message: "please provide project title?",
  //   },
  {
    type: "list",
    name: "license",
    message: "please provide license?",
    choices: ["MIT", "Apache 2.0", "GNU GLPv3", "ISC", "No license"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const readMeString = generateMarkdown({ ...data });
    console.log(readMeString);
  });
}

// Function call to initialize app
init();
