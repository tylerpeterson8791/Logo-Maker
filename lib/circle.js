class Circle extends Shape {
    // Using constructor to assign the object properties. 
    //DO I NEED TO PULL EVERYTHING OR JUST logoShape?
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        // Using super to inherit from parent
        super(logoLetters, logoLettersColor, logoShape, logoColor);
        //this is the shape input of a circle.  Keep space at end to join into string with fill...
        this.shapeSection = '<circle cx="150" cy="100" r="80" '
    }
    render() {
       //combined shapeSection and logoColor to bundle whole line.  Cleaner in my head.
        return `${this.shapeSection} fill="${this.logoColor}" />`;
    }
}