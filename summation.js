const R = require('ramda');

let nums = [1, 2, 3, 4, 5];
console.log(R.sum(nums));

console.log(R.sum(R.range(1, 6)));
