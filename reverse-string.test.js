const reverseString = require('./reverse-string');

function testReverseString() {
  const result = reverseString('Hello World!');
  const expected = '!dlrow olleH';
  if (result !== expected) {
    console.log(`Test Failed: expected ${expected}, got ${result}`);
  } else {
    console.log('Test Passed');
  }
}
testReverseString();