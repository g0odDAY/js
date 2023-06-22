const getDigit = (num,i)=>{
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}
console.log(getDigit(7323,2))
const digitCount = (num)=>{
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
console.log(digitCount(444));
console.log(digitCount(0));
const mostDigits=(nums)=>{
    let max = 0;
    for(let i =0;i<nums.length;i++){
        max=Math.max(max,digitCount(nums[i]));
    }
    return max;
}
console.log(mostDigits([111,2,3435,65]));
const radixSort = (nums)=>{
    const maxDigitCnt = mostDigits(nums);
    for(let k = 0;k<maxDigitCnt;k++){
        let digitBuckets = Array.from({length:10},()=>[]);
        for(let i =0;i<nums.length;i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums=[].concat(...digitBuckets);
    }
    return nums;
}
console.log(radixSort([23,345,5467,12,2345,9852]));