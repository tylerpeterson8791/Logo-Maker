class Triangle extends Shape {
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        super(logoLetters, logoLettersColor, logoShape, logoColor);
        //replaced with shape input of Triangle
        this.shapeSection = '<polygon points="150, 18 244, 182 56, 182" '
        //extra step on this shape.  Change yPlot to 150
        this.yPlot = 150;
    }
    render() {
        return `${this.shapeSection} fill="${this.logoColor}" />`;
}}