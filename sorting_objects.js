const R = require('ramda');

const users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

console.log('Sorted by age, then name:');

let sortedByAge = R.sortBy(R.prop('age'), users);
console.log(sortedByAge);

let sortedByName = R.sortBy(R.prop('name'), users);
console.log(sortedByName);