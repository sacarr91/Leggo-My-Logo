const inquirer = require("inquirer");
const { SVG } = require("./svg");
const { Circle, Triangle, Square } = require('./shapes');
const fs = require('fs');
const { nameFileFn } = require("./nameFile");

let logoShape;


class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text should appear in your logo? Maximum 3 characters.',
                    validate: (text) => text.length <= 3 || "Cannot contain more than 3 characters"
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color should the text be?',
                },
                {
                    type: 'input',
                    name: 'textOutline',
                    message: 'What color should the text outline be?',
                },
                {
                    type: 'list',
                    name: 'shapeType',
                    message: 'Which shape would you like for your logo?',
                    choices: ["circle", "triangle", "square"]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color for your shape?',
                }
            ])
            .then(({ text, textColor, textOutline, shapeType, shapeColor }) => {
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

                const svg = new SVG;
                svg.setText(text, textColor, textOutline);
                svg.setShape(logoShape);

                let fileName = nameFileFn(`logo.svg`);
                return fs.writeFile(`./examples/${fileName}`, svg.render(), (err) =>
                    err ? console.log(err) : console.log(`Successfully created ${fileName}!`))
            })
    }
}

module.exports = { CLI }