const capitalize = require('./calculator.js');

describe('capitalize', () => {
  it('Should take a string as an argument and return the string with the first character capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('world')).toEqual('World');
    expect(capitalize('gilbert')).toEqual('Gilbert');
    expect(capitalize('12345')).toEqual('12345');
  });
});