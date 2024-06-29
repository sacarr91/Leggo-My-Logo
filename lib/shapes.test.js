// require file or function, etc being tested
const shapes = require('./shapes.js')

// test('describe test', () => {
//     expect(expected input).toBe(expected result)
// })

//to run a test, type `npm test` in terminal

test('employing provided test from instructions', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="100, 10 190, 190 10, 190" fill="blue" />');
})