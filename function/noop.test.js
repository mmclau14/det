var noop = require('./noop');
var b = require('batterie');
b.describe('noop', function () {
    b.expect(noop, 'toBeFunction');
    b.expect(noop(), 'toBeUndefined');
});