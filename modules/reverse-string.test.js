const reverseString = require('./reverse-string.js');

describe('reverseString', () => {
  it('should return the reversed version of the input string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
    expect(reverseString('12345')).toEqual('54321');
  });
});
