const cntChar=(str)=>{
    //1.공백 제거
    const empty = str.split(' ').join('').toLocaleLowerCase();
    //2.문자단위로 나눠서 문자 카운트하기
    const result = [...empty].reduce((acc,cur)=>{
        acc[cur] = ++acc[cur] || 1;
        return acc;
    },{})
    return result;
}

const validAnagram = (str1,str2) =>{
    //1.두 문자열의 길이가 다르다면 false
    if(str1.length !== str2.length){
        return false;
    }
    //2. 문자열을 배열로 만들어서 정렬을 하자
    const strArry1 = [...str1].sort();
    const strArry2 = [...str2].sort();

    //3.배열을 객체로 변환하자
    const strObj1 = strArry1.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0) + 1;
        return acc;
    },{})
    const strObj2 = strArry2.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0) + 1;
        return acc;
    },{})

    return JSON.stringify(strObj1)===JSON.stringify(strObj2);

}
console.log(validAnagram('', ''))  // true
console.log(validAnagram('aaz', 'zza'))  // true
console.log(validAnagram('anagram', 'nagaram'))  // true
console.log(validAnagram("rat","car"))  // true
console.log(validAnagram('awesome', 'awesom'))  // true
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))  // true
console.log(validAnagram('qwerty', 'qeywrt'))  // true
console.log(validAnagram('texttwisttime', 'timetwisttext'))  // true


//다중 포인터 패턴
const fnc = (arr)=>{
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        const sum = arr[start]+arr[end];
        if(sum === 0){
            return [arr[start],arr[end]];
        }else if(sum > 0){
            end--;
        }else{
            start++;
        }
    }
}
console.log(fnc([-4,-1,2,3,5,6,9]));

const cntUniqueValues = (arr)=>{
    const array =Array.from(new Set(arr)) ;
    return array.length-1;
}
console.log(cntUniqueValues([1,1,1,1,1,1,2,2,3,4,5]))
console.log(cntUniqueValues([]))

const slidingWindow = (arr,number)=>{
    if(arr.length === 0) return null;
    let maxValue = 0;
    for(let i = 0;i < number;i++){
        maxValue+=arr[i];
    }
    let tempValue=maxValue;
    for(let i =number;i<arr.length-1;i++){
        tempValue=tempValue - arr[i-number]+arr[i];
        console.log('tempValue',tempValue);
        maxValue = Math.max(maxValue,tempValue);
    }
    return maxValue;
}
console.log(slidingWindow([2,3,4,5,7,3,1,2,3,1,0,3],3));
const makeArray  = (number)=>{
    return [...String(number)].sort();
}
const makeObj = (arry)=>{
    let tmp = arry.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0) +1;
        return acc;
    },{})
    return tmp;
}
const sameFrequency = (number1,number2)=>{
    const numberArray1 = makeArray(number1);
    const numberArray2 = makeArray(number2);

    const obj1 = makeObj(numberArray1);
    const obj2 = makeObj(numberArray2);

    return JSON.stringify(obj1)===JSON.stringify(obj2);
}
console.log(sameFrequency(233,223));
console.log(sameFrequency(232223,222233));