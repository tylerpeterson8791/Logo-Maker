//require everything needed in
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");
const shapesTest = require("./lib/shapes.test.js");

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
            message: "What color do you want the letters to be? **For options visit https://147colors.com/",
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
            message: "What color do you want the logo to be? **For options visit https://147colors.com/",
            name: "logoColor",
        },
    ])

    //start .then

/*

GIVEN a command-line application that accepts user input

WHEN I am prompted for text
THEN I can enter up to three characters

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

*/

/* This should be an inquirer set of questions:

Q1 What Letters do you want in your logo? (Up to 3 Letters)
Use VALIDATE like I did in the last homework.  Tweak it for <= 3 letters or throw error.

Q2 What Color Should Your Text Be
Do I leave this open ended in an Input for User to type in?  Any safeguards for if they type nonsense or misspell a color?
I could also limit them to a list of colors to avoid breaking.

Q3 What Shape Should Your Logo Be?
Straightforward list Circle, Square, Triangle.  Make sure to use VALUE here so it's easy to pass along

Q4 What Color Do You Want the Shape to Be?
Same potential issues as Q2.  Decide on input or list.

.then use the shapes function from shapes.js with the responses as input and fs.WriteFile
*/

