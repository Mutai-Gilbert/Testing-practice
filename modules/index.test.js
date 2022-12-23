const {
  stringLength, reverseString, capitalize, Calculator,
} = require('./index.js');

const calculate = new Calculator();

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
    expect(() => stringLength('012345678911')).toThrowError('String must be at least 1 character long and not longer than 10 characters');
  });
});

describe('reverseString', () => {
  it('should return the reversed version of the input string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
    expect(reverseString('12345')).toEqual('54321');
  });
});

describe('capitalize', () => {
  it('Should take a string as an argument and return the string with the first character capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('world')).toEqual('World');
    expect(capitalize('gilbert')).toEqual('Gilbert');
    expect(capitalize('12345')).toEqual('12345');
  });
});

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers together', () => {
      expect(calculate.add(1, 2)).toEqual(3);
      expect(calculate.add(5, 5)).toEqual(10);
      expect(calculate.add(-1, 2)).toEqual(1);
    });
  });
  describe('divide', () => {
    it('should divide one number by one', () => {
      expect(calculate.divide(1, 2)).toEqual(0.5);
      expect(calculate.divide(5, 5)).toEqual(1);
      expect(calculate.divide(-1, 2)).toEqual(-0.5);
    });
  });
  describe('subract', () => {
    it('should subtract two numbers together', () => {
      expect(calculate.subtract(9, 2)).toEqual(7);
      expect(calculate.subtract(5, 5)).toEqual(0);
      expect(calculate.subtract(-1, 2)).toEqual(-3);
    });
  });
  describe('multiply', () => {
    it('should multiply two numbers together', () => {
      expect(calculate.multiply(2, 2)).toEqual(4);
      expect(calculate.multiply(5, 5)).toEqual(25);
      expect(calculate.multiply(-1, 2)).toEqual(-2);
    });
  });
});
