//require parent class
const Shape = require('./shapes.js')

class Square extends Shape {
    constructor(logoLetters, logoLettersColor, logoColor) {
        super(logoLetters, logoLettersColor, logoColor);
    }
    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="${this.logoColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoLettersColor}">${this.logoLetters}</text>
</svg>`
    }
}

module.exports = Square