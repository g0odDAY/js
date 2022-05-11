function add(a,b,c){
    return a+b+c;
}
const nums=[1,2,3];
console.log(add(nums[0],nums[1],nums[3]));
console.log(add(...nums));
//Rest parameter
function sum(first,second,...nums){
    console.log(nums);
    return first+second+nums;
}
console.log(sum(1,2,3,4,4,4,4,4,3));

const ellie={name:'Ellie',age:20,home:{address:'home'}};
const updated={
    ...ellie,
    job:'s/w engineer',
};
updated.home.address='dfsdfsf';
console.log(ellie.home.address);

console.log(updated);