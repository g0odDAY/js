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
//슬라이딩 윈도우 기법
const slidingWindow = (arr,number)=>{
    if(arr.length === 0) return null;
    let maxValue = 0;
    for(let i = 0;i < number;i++){
        maxValue+=arr[i];
    }
    let tempValue=maxValue;
    for(let i =number;i<arr.length-1;i++){
        tempValue = tempValue - arr[i-number] + arr[i];
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
console.clear();
const areThereDuplicates = (...args)=>{

    const filterArr = new Set(args);
    return !(args.length === filterArr.size);
}
console.log(areThereDuplicates(1,2,3,4,4))
console.clear();
const averagePair= (arr,avg)=>{
    //1.배열의 길이가 0이면 return false
    if(arr.length === 0) return false;
    //2.배열의 첫번째 포인터와 마지막 포인터를 정의
    let start = 0;
    let end = arr.length - 1;

    //3.첫번째 포인터와 마지막 포인터의 합이 avg랑 같으면 true
    while(start<end){
        const arryAvg = (arr[start]+arr[end])/2;
        if(arryAvg === avg){
            return true;
        }else if(arryAvg < avg){
            start++;
        }else{
            end--;
        }
    }
    return false;
}
console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));
console.clear();
const isSubsequence = (str1,str2)=>{
    let i = 0;
    let j=0;
    //str1이 공백이라면 true
    if(!str1) return true;
    while(j<str2.length){
        if(str2[j] === str1[i]) i++;
        if(i===str1.length) return true;
        j++;
    }
    return false;

}
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.clear();
const maxSubarraySum = (arr,number)=>{
    if(arr.length<number) return null;
    let max = 0;
    for(let i = 0;i<number;i++){
        max+=arr[i];
    }
    let tmp = max;
    for(let i = number;i<arr.length;i++){
        tmp = tmp - arr[i-number] + arr[i];
        max = Math.max(tmp,max);
    }

    return max;
}
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

const minSubArrayLen = (arr,sum)=>{
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start < arr.length){

        if(total< sum && end < arr.length){
            total += arr[end];
            end++;
        }else if(total >= sum){
            minLen = Math.min(minLen,end-start);
            total -=arr[start];
            start++;
        }else{
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
console.clear();
const findLongestSubstring = (str)=>{
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // console.log('char = ',char);
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // console.log('longest',longest);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
        // console.log('seen[char]',seen[char]);
         console.log('seen',seen);
    }
    return longest;
}
//findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6 isaweso
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
