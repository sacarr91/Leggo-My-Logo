const inquirer = require("inquirer");
const { renderSVG } = require("./renderSvg");

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
            .then(renderSVG({ text, textColor, textOutline, shapeType, shapeColor }))
    }
};

module.exports = { CLI }