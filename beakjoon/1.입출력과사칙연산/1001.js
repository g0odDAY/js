let fs = require('fs');
let input = fs.readFileSync('../txt/1001.txt').toString().split('\n');
let numbers = [];
numbers.push(input[0].split(' '));
console.log(Number(numbers[0][0]) - Number(numbers[0][1]));
