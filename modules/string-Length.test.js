const stringLength = require('./string-Length.js');

describe('stringLength', () => {
  it('should return the correct character count for a given string', () => {
    expect(stringLength('hello')).toEqual(5);
    expect(stringLength('world')).toEqual(5);
    expect(stringLength('')).toEqual(0);
  });

  it('should throw an error if the string is less than 1 character long', () => {
    expect(() => stringLength('')).toThrowError('String must be at least 1 character long and not longer than 10 characters');
  });

  it('should throw an error if the string is more than 10 characters long', () => {
    expect(() => stringLength('12345678901')).toThrowError('String must be at least 1 character long and not longer than 10 characters');
  });
});
