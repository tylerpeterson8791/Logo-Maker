class Square extends Shape {
    constructor(logoLetters, logoLettersColor, logoShape, logoColor) {
        super(logoLetters, logoLettersColor, logoShape, logoColor);
        //replaced with shape input of Square (rectangle with same width and height)
        this.shapeSection = '<rect x="75" y="25" width="150" height="150" '
    }
    render() {
        return `${this.shapeSection} fill="${this.logoColor}" />`;
}}