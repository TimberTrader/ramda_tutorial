const R = require('ramda');

let nums = [3, 1, 4, 2, 8, 5, 6];

console.log('Sorting:')
console.log(R.sort((x, y) => x - y, nums));
console.log(R.sort((x, y) => y - x, nums));

console.log('Reversing:')
console.log(R.reverse(nums));
console.log(R.reverse('forest'));
