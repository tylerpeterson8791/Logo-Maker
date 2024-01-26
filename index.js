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

    //How do these responses get passed and where do they need to get passed?  Just to createLogo?  Test that first.


/*

GIVEN a command-line application that accepts user input

WHEN I am prompted for text
THEN I can enter up to three characters  - DONE

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number) - DONE

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square - DONE

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number) - DONE

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line - DONE

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered - DONE

*/

// I'm worried about what happens if user mispells a color.  Added a reference site now.  Do I need to throw an error?
// The only thing that could be wrong is the color things.  Maybe have the error say:
// "There was an error in generating your file.  Please check your color spelling, visit 147colors.com to reference available colors. Please try again!"
