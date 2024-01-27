//require parent class
const Shape = require('./shapes')

class Triangle extends Shape {
    constructor(logoLetters, logoLettersColor, logoColor) {
        super(logoLetters, logoLettersColor, logoColor);
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoLettersColor}">${this.logoLetters}</text>
        </svg>`
}}

module.exports = Triangle