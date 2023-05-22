// Father class that defines common properties of a shape
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}
// Square class extends from Shape class
class Square extends Shape {
    render() {
        // Square dimensions
        return `<rect x="75" y="50" width="180" height="180" fill="${this.color}" />`;
    }
}

// Circle class extends from Shape class
class Circle extends Shape {
    render() {
        // Circle dimensions
        return `<circle cx="155" cy="120" r="95" fill="${this.color}" />`;
    }
}


// Triangle class extends from Shape class
class Triangle extends Shape {
    render() {
        // Triangle dimensions
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}


// Exports classes (Square, Triangle, Circle)
module.exports = { Triangle, Square, Circle };