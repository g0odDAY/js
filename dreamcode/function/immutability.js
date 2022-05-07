function display(num){
    num=5;
    console.log(num);
}
const value=4;
display(value);
console.log(value);


function displayObj(obj){
    obj.name='dddddddddd'; //❌외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하면안됨
    console.log(obj);
}
const ellie ={name:'ellie'};
// displayObj(ellie);
// console.log(ellie);



function changeName(obj){
    return {...obj,name:'bod'};
}

const lostArk ={name:'lostArk'};
changeName(lostArk);
console.log('lostArk'+lostArk);

