const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  { name: "name", message: "Enter Your Full Name: " },
  { name: "title", message: "Enter Project Title: " },
  { name: "description", message: "Enter Project Description: " },
  { name: "installation", message: "Enter Installation Instructions: " },
  { name: "usage", message: "Enter Usage Instructions: " },
  { type: "list", name: "license", message: "Enter License: ", choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "MPL 2.0", "None"] },
  { name: "year", message: "Enter Year: " },
  { type: "list", name: "test", message: "Enter Testing Library: ", choices: ["JEST", "Mocha", "Jasmine", "Karma", "Puppeteer", "None"] },
  { name: "github", message: "Enter Github Username: " },
  { name: "email", message: "Enter Email Address: " }];

inquirer.prompt(questions).then(data => {
  fs.writeFileSync(`README - ${data.title}.md`, generateMarkdown(data))
});
