const Triangle = require('./classes/triangle.js')
const Square = require('./classes/square.js')
const Circle = require('./classes/circle.js')
const fs = require('fs');

// 

//NOW TO ADD THE createShape function
// function createLogo(response) {
//     ///take responses and put into variable object.  Do I call for new shape?  I know it should work it I call new Square or an individual shape...maybe?
//     const newLogo = new Shape(response.logoLetters, response.logoLettersColor, response.logoShape, response.logoColor);
//     //grab shapeSection from classes
//     const shapeSection = newLogo.render();
  
//   logoData =  `
//   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
//     ${newLogo.shapeSection}
  
//     <text x="150" y="${newLogo.yPlot}" font-size="60" text-anchor="middle" fill="${newLogo.logoLettersColor}">${newLogo.logoLetters}</text>
  
//   </svg>
//   `;

//   return logoData
//   }
  


// //what am I exporting?  What do I need?  Is this right?
// module.exports = createLogo;