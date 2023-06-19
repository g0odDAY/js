const insertSort = (arr)=>{
    for(let i = 1;i<arr.length;i++){
        let currentVal = arr[i];
        for(let j=i-1;j>-1;j--){
            if(currentVal<arr[j]){
                arr[i]=arr[j];
                arr[j]=currentVal;
                currentVal=arr[i];
            }
        }
    }
    return arr;
}
console.log(insertSort([4,5,8,1,3,9]));