const insertSort = (arr)=>{
    for(let i = 1;i<arr.length;i++){
        let currentVal = arr[i];
        for(var j=i-1;j>-1&& currentVal < arr[j];j--){
            arr[j+1]=arr[j];
        }
        console.log(arr);
        arr[j+1]=currentVal;
    }
    return arr;
}
console.log(insertSort([4,5,8,1,3,9]));