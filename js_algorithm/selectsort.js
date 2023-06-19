const selectSort = (arr)=>{
    for(let i =0;i<arr.length;i++){
        let lowest = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = tmp;
    }
    return arr;
}
console.log(selectSort([11, 23, 44, 2, 1, 24, 7]));