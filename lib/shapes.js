//  While not a requirement, it is recommended that you 
//place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class
// and use inheritance to reuse the code in the child classes.

/*  class Shape
this is the parent this includes letters, lettersColor, shapeName, shapeColor
ALSO include plotY as a static 125.  In Triangle class overwrite to 150


classes circle, square, triangle all "extend" the shapes class

 */

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
