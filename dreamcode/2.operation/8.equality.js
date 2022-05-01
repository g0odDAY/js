//동등 비교 관계 연산자
// ==값이 같음
// !=값이 다름
// ===값과 타입이 둘다 같음
// !==값과 타입이 다름
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1);
console.log(true === 1);
console.clear();
const obj1={
    name : 'js',
};

const obj2={
    name : 'js',
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);
console.clear();
let obj3 = obj2;
console.log(obj1 == obj3);
console.log(obj2 == obj3);
console.log(obj2 === obj3);
console.log(obj1.name == obj3.name);
console.log(obj2.name == obj3.name);

function b(){
    for(var i =0;i<10;i++){

    }
    return i;
}
console.log(b());
console.log('*****************************************************************');
function arrow(){
    setTimeout(() => {
        console.log(this);
    },1000)
}
function not_arrow(){
    setTimeout(function(){
        console.log(this);
    },1000)
}

const p1=new not_arrow();
const p2=new arrow();
console.log('*****************************************************************');
