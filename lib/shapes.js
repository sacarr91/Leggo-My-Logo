class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle r="90" cx="150" cy="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100,10 190,190 10,190" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" x="10" y="10" style="fill:${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square }