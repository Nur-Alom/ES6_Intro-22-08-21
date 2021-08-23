const numbers = [21, 22, 45, 25, 35, 32];
console.log(numbers);
// console.log(...numbers);

const max = Math.max(21, 93, 54, 61, 54, 85);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);



