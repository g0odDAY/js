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