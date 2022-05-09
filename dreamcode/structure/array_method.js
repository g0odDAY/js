
let fruit=[1,2,3,4,5];
//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruit));
console.log(Array.isArray({}));

//특정한 아이템의 위치를 찾을때
console.log(fruit.indexOf(3));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruit.includes(3));

//추가 - 제일 뒤
let lng=fruit.push(33);
console.log(lng);
console.log(fruit);

//추가 - 제일 뒤

lng=fruit.unshift(11);
console.log(fruit);
console.log(lng);

let deleted=fruit.splice(1,1,555);
console.log(fruit);
console.log(deleted);