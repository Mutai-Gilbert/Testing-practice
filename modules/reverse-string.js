function reverseString(string) {
  return string.split('').reverse().join('');
}
reverseString('Hello World!');
module.exports = reverseString();