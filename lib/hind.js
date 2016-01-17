var _ = require('underscore');

function hind(originalFn, hindFn) {
  return _.wrap(originalFn, hindFn);
};

module.exports = hind;
