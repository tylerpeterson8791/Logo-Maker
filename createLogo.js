const Triangle = require('./classes/triangle.js')
const Square = require('./classes/square.js')
const Circle = require('./classes/circle.js')
const fs = require('fs');

const generateLogo = (logoLetters, logoLettersColor, logoShape, logoColor) => {
    let shapeInstance;

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
    }
    console.log(shapeInstance.render());
    // Write SVG content to logo.svg file
    fs.writeFileSync('logo.svg', logoCode);

    console.log('Generated logo.svg');
};

module.exports = generateLogo
