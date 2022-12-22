const calculate = require('./calculator.js');

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
      expect(calculate.add(1, 2)).toEqual(0.5);
      expect(calculate.add(5, 5)).toEqual(1);
      expect(calculate.add(-1, 2)).toEqual(-0.5);
    });
  });
  describe('subract', () => {
    it('should subtract two numbers together', () => {
      expect(calculate.add(1, 2)).toEqual(-1);
      expect(calculate.add(5, 5)).toEqual(0);
      expect(calculate.add(-1, 2)).toEqual(-3);
    });
  });
  describe('multiply', () => {
    it('should multiply two numbers together', () => {
      expect(calculate.add(1, 2)).toEqual(2);
      expect(calculate.add(5, 5)).toEqual(25);
      expect(calculate.add(-1, 2)).toEqual(-2);
    });
  });
});