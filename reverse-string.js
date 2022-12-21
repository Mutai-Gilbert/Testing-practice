function reverseString(string) {
  return string.split('').join('');
}
console.log(reverseString('Hello World!'));
module.exports = reverseString();