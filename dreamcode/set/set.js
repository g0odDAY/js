//set
const set = new Set([1,2,3]);
console.log(set);
console.log(set.size);
console.log(set.has(77));
//순회가능
set.forEach((item)=>console.log(item));
for(const value of set.values()){
    console.log(value);
}
//set 추가 배열은 중복가능하지만 set은 중복값 불가능
set.add(6);
console.log(set);
set.add(6);
console.log(set);
//삭제
set.delete(6);
console.log(set);
//전부 삭제
set.clear();
console.log(set);

//set obj
const obj1={name:'apple',price:8};
const obj2={name:'banana',price:5};
const objs=new Set([obj1,obj2]);
console.log('obj',objs);

//quiz1

obj1.price=10;
objs.add(obj1);
console.log(objs);

//quiz2
const obj3={name:'banana',price:5};
objs.add(obj3);
console.log(objs);
obj3.price=8;
console.log(objs);
