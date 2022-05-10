const fruit=['🍌', '🍓', '🍇', '🍓'];
fruit.forEach((val,idx,arry) => console.log(val,idx,arry));

//조건에 맞는(콜백함수) 아이템을 찾을떄
//find:제일 먼저 조건에 맞는 아이템을 반환
const item1={name:'milk',price:2};
const item2={name:'cookie',price:1};
const item3={name:'rice',price:45};
const products=[item1,item2,item3,item3];

let found=products.find((val)=>val.name==='cookie');
console.log(found);

//findIndex:제일 먼저 조건에 맞는 아이템의 인덱스를 반환
found=products.findIndex((val)=>val.name==='cookie');
console.log(found);

//배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
found=products.some((val)=>val.name==='rice');
console.log(found);

//배열의 아이템들이  전부 조건(콜백함수)에 맞는지 확인
found=products.every((val)=>val.name==='rice');
console.log(found);

//조건에 맞는 모든 아이템들을 새로운 배열로!
found=products.filter((val)=>val.name==='rice');
console.log(found);

console.clear();
//Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열생성

const nums=[1,3,4,5,6];
found=nums.map(val=> val*4);
console.log(found);

found=nums.map((val) => {
    if(val % 2 === 0){
        return val*5;
    }else{
        return val;
    }
});
console.log(found);

//FlatMap 중첩된 배열을 쫘악펴줌
found=nums.map(val=>[2,3]);
console.log(found);

found=nums.flatMap(val=>[2,3]);
console.log(found);

found=['dream','coding'].flatMap((text)=>text.split(''));
console.log(found);

//sort 배열의 아이템들을 정렬
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts=['hi','abc'];
texts.sort();
console.log(texts);

const numbers=[0,5,4,2,1,10];
numbers.sort();
console.log(numbers);

numbers.sort((a,b) => a-b);
console.log(numbers);

//reduce배열의 요소들을 접어서 접어서 값을 하나로 0은 sum의 초기값
found=[1,2,3,4,5].reduce((sum,value)=>(sum +=value),0);

console.log(found);