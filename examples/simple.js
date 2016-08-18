var hind = require('../lib/hind.js');

function testFunction() {
  console.log('I am testFunction');
}

testFunction = hind(testFunction, function(func) {
  func();
  console.log('This was called after testFunction');
});

testFunction();