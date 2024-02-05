const Triangle = require('./classes/triangle');
const Square = require('./classes/square');
const Circle = require('./classes/circle');

describe('Triangle', () => {
    it('renders correctly with constant values', () => {
    const triangle = new Triangle('ABC', 'black', 'blue');
    const expectedOutput = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">ABC</text>
    </svg>`;
        expect(triangle.render()).toMatch(expectedOutput);
    });
});

describe('Square', () => {
it('renders correctly with constant values', () => {
const square = new Square('ABC', 'black', 'blue');
const expectedOutput = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
</svg>`;
        expect(square.render()).toMatch(expectedOutput);
    });
});

describe('Circle', () => {
    it('renders correctly with constant values', () => {
        const circle = new Circle('ABC', 'black', 'blue');
        const expectedOutput = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text></svg>';
        expect(circle.render()).toMatch(expectedOutput);
    });
});