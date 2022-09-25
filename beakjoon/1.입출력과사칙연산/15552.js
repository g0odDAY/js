let fs = require('fs');
let input = fs.readFileSync('../txt/15552.txt').toString().split('\n');
let count = input[0];
let numbers = [];
let answer = '';
for (let i = 1; i < input.length; i++) {
    if (input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for (let i = 0; i < numbers.length; i++){
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);
    answer += `${num1+num2} \n`;
}
console.log(answer);