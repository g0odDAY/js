//옵셔널 체이닝 연산자 Optional chaining Operator
//null or unddfined을 확일할떄
let item={price:1};
const price=item?.price;
console.log(price);

let obj={name:'dog',owner:{name:'ellie'}};
function printName(obj){
    const name=obj?.owner?.name;
    console.log(name);
}
printName(obj);
