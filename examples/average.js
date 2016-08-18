var hind = require('../lib/hind.js');

function testFunction(data, datab) {
  console.log('I am testFunction', data, datab);
}

testFunction = hind(testFunction, function(func, argz, argy) {
  func(argz, argy);
  console.log('This was called after testFunction');
});

testFunction("Hello", "World");