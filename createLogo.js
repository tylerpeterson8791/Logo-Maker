const Triangle = require('./classes/triangle.js')
const Square = require('./classes/square.js')
const Circle = require('./classes/circle.js')
const fs = require('fs');

//function to match logoShape to corresponding class file
const createLogo = (logoLetters, logoLettersColor, logoShape, logoColor) => {
    //declare this outside of the switch function for access later
    let shapeInstance;

    //use case and break to run through options until a match is met
    switch (logoShape) {
        case "Circle":
            shapeInstance = new Circle(logoLetters, logoLettersColor, logoColor);
            break;
        case "Square":
            shapeInstance = new Square(logoLetters, logoLettersColor, logoColor);
            break;
        case "Triangle":
            shapeInstance = new Triangle(logoLetters, logoLettersColor, logoColor);
            break;
        default:
            throw new Error("Invalid logo shape");
    }
    
    //create new variable with shapeInstance and the rendering from the class file
    const svgContent = shapeInstance.render();

    // Write the SVG content to a file
    fs.writeFile("logo.svg", svgContent, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("File written successfully: logo.svg");
        }
    });
}


module.exports = createLogo
