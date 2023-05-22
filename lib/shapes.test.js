// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");


/* Unit testing ->
    Square:
      Background Color: green
      Dimension: x="75" y="50" width="180" height="180"

    Cicle:
      Background Color: blue
      Dimension: cx="155" cy="120" r="95"
      
    Triangle:
      Background Color: yellow
      Dimension:  points="150, 18 244, 182 56, 182"

*/
describe("Square test", () => {
  test("test for a green square", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="75" y="50" width="180" height="180" fill="green" />'
    );
  });
});

describe("Circle test", () => {
  test("test for a blue circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="155" cy="120" r="95" fill="blue" />'
    );
  });
});


describe("Triangle test", () => {
  test("test for a yellow triangle", () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
    );
  });
});

