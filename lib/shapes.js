class Shape {
    //Parent class
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) 
    {
        this.logoLetters = logoLetters;
        this.logoLettersColor = logoLettersColor;
        this.logoShape = logoShape;
        this.logoColor = logoColor;
    }   
    }


//All three individual classes EXTEND the parent class of Shape






//NOW TO ADD THE createShape function
function createLogo(response) {
    ///take responses and put into variable object.  Do I call for new shape?  I know it should work it I call new Square or an individual shape...maybe?
    const newLogo = new Shape(response.logoLetters, response.logoLettersColor, response.logoShape, response.logoColor);
    //grab shapeSection from classes
    const shapeSection = newLogo.render();
  
  logoData =  `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${newLogo.shapeSection}
  
    <text x="150" y="${newLogo.yPlot}" font-size="60" text-anchor="middle" fill="${newLogo.logoLettersColor}">${newLogo.logoLetters}</text>
  
  </svg>
  `;

  return logoData
  }
  


//what am I exporting?  What do I need?  Is this right?
module.exports = createLogo;



//there should be a build shape function that takes the info and builds out the svg with the input
//this needs to be exported at the end.  DONT FORGET

/* EXAMPLES:

<!-- square  -->

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> - THIS IS THE SAME ACROSS THE BOARD

shapeSection ----                                  logoColor
  (<rect x="90" y="40" width="120" height="120" )fill="turquoise" /> - DIMENSIONS ARE UNIQUE TO SHAPE, FILL (COLOR) DECLARED IN PARENT

Static---        yAxis  ---- Static -------              logoLettersColor----logoLetters
  <text x="150" (y="125" )font-size="60" text-anchor="middle" (fill="#444">)(SVG</text>) - TEXT INPUT AND FILL (COLOR) 

</svg>



<!-- circle  -->

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

<!-- triangle  -->

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="bisque" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text> - !!!NOTICE Y IS DIFFERENT!!

</svg>

*/
