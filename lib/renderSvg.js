const { SVG } = require("./svg");
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');
const nameFile = require("./nameFile");

let logoShape;

const renderSVG = (text, textColor, textOutline, shapeType, shapeColor) => {
    let svgShape;
    switch (shapeType) {
        case "circle":
            svgShape = new Circle();
            break;
        case "triangle":
            svgShape = new Triangle();
            break;
        case "square":
            svgShape = new Square();
            break;
    }
    svgShape.setColor(shapeColor);
    logoShape = svgShape.render();
    console.log(logoShape);
    const svg = new SVG;
    svg.setText(text, textColor, textOutline);
    svg.setShape(logoShape);
    let fileName = nameFile(`logo.svg`);
    return fs.writeFile(`./examples/${fileName}`, svg.render(), (err) =>
        err ? console.log(err) : console.log('Successfully created logo.svg!'))
}

module.exports = { renderSVG };