//let 재할당가능
let a=1;
a=2;

//const 재할당이 불가능
const text = 'hello';
console.log(text);


//1.상수
const MAX_FRUITS=5;

//2.재할당 불가능한 상수변수 또는 변수
const apple={
    name:'apple',
    color:'red',
    display:'🍎'
};

console.log(apple);
apple.name='orange';
console.log(apple);
