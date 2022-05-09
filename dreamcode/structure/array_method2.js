// 잘라진 새로운 배열을 만듬
let fruit=['🍉','🍟','🍤'];

let newArr=fruit.slice(0,2);
console.log(newArr);
console.log(fruit);

//여러개의 배열을 붙여줌
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.clear();
//중첩 배열을 하나의 배열로 쫙펴기 단계선택가능
let arr=[
    [1,2,3],
    [4,[5,6]],
]
console.log(arr);
console.log(arr.flat(2));

//특정한 값으로 배열을 채우기
// arr.fill(0);
// console.log(arr);

//배열을 문자열로 합하기
let text=arr.join('|');
console.log(text);