const countDown=(num)=>{
    if(num<=0){
        console.log('all done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(5);
console.clear();
const sumRange = (num)=>{
    if(num===1) return 1;
    return num + sumRange(num-1);
}
console.log(sumRange(5))
const factorial = (num)=>{
    if(num===1) return 1;
    return num * factorial(num-1);
}
console.log(factorial(5));

const collectOdds = (arr)=>{
    const result = [];

    const helper=(helperInput)=>{
        if(helperInput.length===0) return;

        if(helperInput[0]%2 !== 0){
            result.push(helperInput[0]);
        }
        return helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}
console.log(collectOdds([1,2,3,4,5,6,7]))
const collectOddsRecursion = (arr)=>{
    let newArr = [];
    if(arr.length===0) return newArr;
    if(arr[0]%2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddsRecursion(arr.slice(1)))

    return newArr;
}
console.log(collectOddsRecursion([1,3,3,4,2,3,11,22]))
console.clear();
const power =(base,exponent)=>{

    if(exponent === 0) return 1;

    return base * power(base,exponent-1)
}
console.log(power(2,3));//8
console.log(power(2,2));//4
console.log(power(2,4));//16
console.log(power(2,0));//1
console.clear();
const productOfArray = (arr)=>{

    let result = 1;
    const helper = (array)=>{
        if(array.length===0) return;
        result*=array[0];
        return helper(array.slice(1));
    }
    helper(arr)
    return result;
}
console.log(productOfArray([1,2,3]));
const recursiveRange=(number)=>{

    if(number<1) return 0;
    return number + recursiveRange(number-1);
}
console.log(recursiveRange(6));
console.log(recursiveRange(10));
console.clear();
const fib = (number)=>{
    if(number<=2) return 1;


    return  fib(number-1)+fib(number-2);
}
console.log(fib(4));
const reverse =(str)=> {
    if(str.length <= 1) {
        console.log('str',str);
        return str
    };
    return reverse(str.slice(1)) + str[0];

}
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
const isPalindrome = (str)=>{
    //문자열의 길이가 1개면 뒤집으나 마나 같다
    if(str.length === 1) return true;
    console.log('str',str);
    //문자열의 길이가 2개라면 첫번째 문자열과 두번째 문자열이 같음면 뒤집어도 같다
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('foobar'));
console.clear();
const isOdd = val=> val%2 !== 0;
const someRecursive = (arr,fnc)=>{
    if(arr.length===0) return false;
    if(fnc(arr[0])) return true;

    return someRecursive(arr.slice(1),fnc);
}
console.log(someRecursive([1,2,3,4],isOdd))//t
console.log(someRecursive([2,2,2,4],isOdd))//f
console.log(someRecursive([4,6,8],isOdd))//f
console.log(someRecursive([4,6,8], val => val > 10)) // false
const flatten=(arr)=>{
    let result = [];
    for(let i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
const capitalizeFirst = (arr)=>{

    let result = [];
    const helper=(arr)=>{
        if(arr.length===0) return;
        result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
        return helper(arr.slice(1));
    }

    helper(arr);
    return result;
}
console.log(capitalizeFirst(['car','taco','banana']));
console.log(capitalizeFirst(['ddsar']));
const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.clear();
const nestedEvenSum = (obj,sum=0)=>{
    for(let key in obj){
        if(typeof obj[key]==='object'){
            console.log('obj[key]',obj[key]);
            sum += nestedEvenSum(obj[key]);
        }else if(typeof obj[key]==='number'&& obj[key]%2 === 0){
            sum+=obj[key];
        }
    }
    return sum;
}
console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
