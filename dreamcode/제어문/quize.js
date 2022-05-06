let num = 2;
if(num % 2 == 0){
    console.log('👍');
}else if(num % 2 == 1){
    console.log('👇');
}

let emoji = (num % 2 == 0) ? '👍':'👇';
console.log(emoji);