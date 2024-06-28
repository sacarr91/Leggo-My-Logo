class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
             ${this.shapeElement}
             ${this.textElement}
            </svg>`
    }
    setText(msg, fillColor, outlineColor) {
        this.textElement = ` <text 
        x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fillColor}" stroke="${outlineColor}" font-size="75">${msg}</text>`
    }
    setShape(shape) {
        this.shapeElement = shape;
    }
}

//no semicolon on a method

//export

module.exports = { SVG }