const obj1={name:'dog'};
const obj2={name:'cat',owner:'Ellie'};
if(obj1&&obj2){
    console.log('true');
}

let result=obj1 && obj2;
console.log(result);

if(result){
    console.log(true);
}

result=obj1 || obj2;
console.log(result);

//활용예


function changeOwner(animal){
    if(!animal.owner){
        throw new Error('주인이 없어!');
    }
    animal.owner='바뀐주인';
}
function makeNewOwner(animal){
    if(animal.owner){
        throw new Error('주인이 있어');
    }
    animal.owner='새로운주인';
}
// && => 조건이  truthy 일때, 무언가를 해야 할 경우
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);
// || => 조건이  falshy 일때, 무언가를 해야 할 경우
obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//null or undefined인 경우를 확인 할때
// || falshy한 경우 설정(할당)
let item={price:1};
const price=item && item.price;
console.log(price);
//기본값을설정
function print(message){
    const text=message || 'default hello';
    console.log(text);
}
print('ddd');