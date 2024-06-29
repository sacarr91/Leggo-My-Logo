const { nameFileFn } = require('./nameFile.js');

test('checking if nameFile loops correctly', () => {
    // let testName = `logo.svg`;
    newTestName = nameFileFn(`logo.svg`);
    expect(newTestName).toBe(`logo-1.svg`)}
);