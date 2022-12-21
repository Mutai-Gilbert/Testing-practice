const stringLength = require('./string-Length');

function testStringLength() {
  const result = stringLength('Hello world!');
  const expected = 12;
  if (result !== expected) {
    console.log(`Test failed: expected ${expected}, got ${result}`);
  } else {
    console.log('Test passed!');
  }
  try {
    stringLength('');
  } catch (error) {
    console.log(`Test passed: caught error "${error.message}"`);
  }
  try {
    stringLength('12345678901');
  } catch (error) {
    console.log(`Test passed: caught error "${error.message}"`);
  }
}
testStringLength();