var hind = require('../lib/hind.js');

function testFunction(fn) {
  fn(console.log('I am testFunction'));
}

testFunction = hind(testFunction, function(func, argz, cb) {
  func(cb);
  console.log('This was called after testFunction');
});

testFunction("test", function(argz) {
  console.log("I am a callback.");
});