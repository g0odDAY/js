const bubbleSort = (arr)=>{
    let tmp = 0;
    let set;
    for(let i = 0;i<arr.length;i++){
        set = true;
        for(let j = i+1;j<arr.length;j++){
            set=false;
            console.log(arr);
            if(arr[i]>arr[j]){
                tmp = arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
            if(set) break;
        }
    }
    return arr;
}
console.log(bubbleSort([11,23,44,2,1,24,7]));
console.log(bubbleSort([3,44,38,5,47,15,36,26,27,2,4]));