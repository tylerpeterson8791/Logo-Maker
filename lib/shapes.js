class Shape {
    //Parent class
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        this.logoLetters = logoLetters;
        this.logoLettersColor = logoLettersColor;
        this.logoShape = logoShape;
        this.logoColor = logoColor;
        // Added this for the y axis plot of the text.  Setting to 125 for both square and circle, triangle has it's own value to overwrite
        this.yPlot = 125;
    }
    //I have to render something here? Return something?  Trying to wrap my head around what it is? Will revisit once I have children classes in there.
    render() {
        return;
    }
}

//All three individual classes EXTEND the parent class of Shape

class Circle extends Shape {
    // Using constructor to assign the object properties
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        // Using super to inherit from parent
        super(logoLetters, logoLettersColor, logoShape, logoColor);
        //this is the shape input of a circle.  Keep space at end to join into string with fill...
        this.shapeSection = '<circle cx="150" cy="100" r="80" '
    }
}

class Square extends Shape {
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        super(logoLetters, logoLettersColor, logoShape, logoColor);
        //replaced with shape input of Square (rectangle with same width and height)
        this.shapeSection = '<rect x="75" y="25" width="150" height="150" '
    }
}

class Triangle extends Shape {
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        super(logoLetters, logoLettersColor, logoShape, logoColor);
        //replaced with shape input of Triangle
        this.shapeHtml = '<polygon points="150, 18 244, 182 56, 182" '
        //extra step on this shape.  Change yPlot to 150
        this.yPlot = 150;
    }
}

//NOW TO ADD THE createShape function





//there should be a build shape function that takes the info and builds out the svg with the input
//this needs to be exported at the end.  DONT FORGET

/* EXAMPLES:

<!-- square  -->

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> - THIS IS THE SAME ACROSS THE BOARD

  <rect x="90" y="40" width="120" height="120" fill="turquoise" /> - DIMENSIONS ARE UNIQUE TO SHAPE, FILL (COLOR) DECLARED IN PARENT

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text> - TEXT INPUT AND FILL (COLOR) 

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