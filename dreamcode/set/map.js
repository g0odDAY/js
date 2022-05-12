const map = new Map([
    ['key1','apple'],
    ['key2','banana']
]);
console.log(map);
//has key값을 찾음
console.log(map.has('apple'));
console.log(map.has('key1'));

//순회
map.forEach((value,key)=>console.log(key,value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//찾기 찾고자하는 key값에 value 값을 가져옴
console.log(map.get('key1'));
console.log(map.get('key122ㄴ'));
// 추가
map.set('key3','kiwie');
console.log(map);

//전부삭제 =>clear

//object 와 큰 차이점??
const key={name:'milk',price:10};
const milk={name:'milk',price:10,description:'맛잇는우유'};
const obj={
    [key]:milk,
};
console.log(obj);
const map2=new Map([[key,milk]]);
console.log(map2);