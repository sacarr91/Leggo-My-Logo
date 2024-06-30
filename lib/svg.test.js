const { SVG } = require('./svg');
const { Circle } = require('./shapes');

test('SVG: setText function', () => {
    const svg = new SVG;
    svg.setText("ABC", "blue", "white");
    expect(svg.textElement).toEqual(` <text 
        x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" stroke="white" font-size="75">ABC</text>`);
});

test('SVG: setShape function', () => {
    const svg = new SVG;
    let testCircle = new Circle();
    testCircle.color = "blue";

    svg.setShape(testCircle.render());
    expect(svg.shapeElement).toEqual(`<circle r="90" cx="150" cy="100" fill="blue" />`);
});