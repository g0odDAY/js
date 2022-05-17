//동결 Object.freeze 추가,삭제,쓰기,속성 재정의 안됨!!!!!
//(단,얕은 꽁꽁얼림!)
const ellie={name:'엘리'};
const dog={name:'와우',emoji:'dog',owner:ellie};
Object.freeze(dog);
dog.name='dsfsdfsd';
console.log(dog);
dog.age=4;
console.log(dog);
ellie.name='dfsdf';
console.log(dog);

//밀봉! Object.seal 값의 수정 가능, 추가,삭제,속성재정의 다 불가능!!
const cat={...dog};
//Object.assign(cat,dog);
Object.seal(cat);
console.log('cat',cat);
cat.name='냐용';
console.log(cat);
delete cat.emoji;
console.log(cat);

//확장 금지 preventExtensions 추가만 안됨!!
const tiger={name:'어흥'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));