function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    return string.length;
  }
  throw new Error('String must be at least 1 character long and not longer than 10 characters');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}
reverseString('Hello World!');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class Calculator {
  add = (x, y) => x + y;

  subtract = (x, y) => x - y;

  divide = (x, y) => x / y;

  multiply = (x, y) => x * y;
}
module.exports = {
  stringLength, reverseString, capitalize, Calculator,
};