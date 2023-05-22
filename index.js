// imports for modules:

//Inquirer
const inquirer = require("inquirer");

// File system
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Logo creation
function writeToFile(fileName, usrInput) {
  let svgString = "";
  
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    +"<g>"
    +`${usrInput.shape}`;

  let shapeChoice;
  if (usrInput.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${usrInput.shapeBackgroundColor}"/>`;
  } else if (usrInput.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="75" y="50" width="180" height="180" fill="${usrInput.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="155" cy="120" r="95" fill="${usrInput.shapeBackgroundColor}"/>`;
  }

  // text style inside of the shape
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="45" fill="${usrInput.textColor}">${usrInput.text}</text>`
            +"</g>"
            +"</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Logo -> logo.svg created");
  });
}

// function that gets user input on how to create the logo
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Enter text on shape? (Up to 4 characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Enter text color: keyword or a hexadecimal value:",
        name: "textColor",
      },
      {
        type: "list",
        message: "Select logo shape?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Enter shape color: keyword or a hexadecimal value:",
        name: "shapeBackgroundColor",
      },
    ])
    .then((usrInput) => {
      // conditional to control that user can enter a maximum of 4 characters
      if (usrInput.text.length > 4) {
        console.log("Text for shape should be up to 4 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", usrInput);
      }
    });
}

// Function that start the app
promptUser();