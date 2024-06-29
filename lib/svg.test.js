const { SVG } = require('./svg')

test('SVG output', () => {
    const svg = new SVG;
    svg.setColor("blue");
    expect(svg.render()).toEqual('<polygon points="100,10 190,190 10,190" fill="blue" />');
})