// require file or function, etc being tested
const { Triangle, Square, Circle } = require('./shapes.js')

// test('describe test', () => {
//     expect(expected input).toBe(expected result)
// })

//to run a test, type `npm test` in terminal

test('Testing TRIANGLE per instructions', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="1,105 200,1 290,190" fill="blue" />');
})

test('Testing CIRCLE per instructions', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle r="90" cx="150" cy="100" fill="blue" />');
})

test('Testing SQUARE per instructions', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="190" height="190" x="55" y="5" style="fill:blue" />');
})