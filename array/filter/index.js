var secondToIterable = require('./utils/function/convert-second-to-iterable');
var filterMaker = require('./utils/array/filter/maker');
var reduce = require('./utils/array/reduce');
module.exports = secondToIterable(filterMaker(reduce));