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
        return `<polygon points="1,105 200,1 290,190" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="190" height="190" x="55" y="5" style="fill:${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square }