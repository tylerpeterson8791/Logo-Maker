//require everything needed in
const inquirer = require("inquirer");
const fs = require("fs");
const createLogo = require("./createLogo.js");

inquirer
    .prompt([
        {
            type: "input",
            message: "Which letters do you want the logo to display? (THREE CHARACTERS MAX)",
            name: "logoLetters",
            validate: logoLetters => {
                if (logoLetters.length > 3) {
                    return "THREE CHARACTERS MAX: Try Again"
                    //forces user to input correctly  
                    //when you do a return you don't need to do else
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What color do you want the letters to be? **Hexadecimal numbers also accepted",
            name: "logoLettersColor",
        },
        {
            type: "list",
            message: "What shape do you want the logo to be?",
            choices: [
                { value: "Circle" },
                { value: "Square" },
                { value: "Triangle" },

            ],
            name: "logoShape",
        },
        {
            type: "input",
            message: "What color do you want the logo to be? **Hexadecimal numbers also accepted",
            name: "logoColor",
        },
    ])

    //pass inquirer input values into createLogo function
    .then(response => {
        createLogo(response.logoLetters, response.logoLettersColor, response.logoShape, response.logoColor);
    })
    .catch(error => {
        console.error('Error: Please try again.', error);
    });
    