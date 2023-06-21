const pivot = (arr,start=0,end=arr.length-1)=>{
    const swap = (array,i,j)=>{
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1;i<=end;i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
            console.log(arr);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}
//console.log(pivot([4,8,2,1,5,7,6,3]));

const quickSort = (arr,left=0,right=arr.length-1)=>{
    if(left < right){
        let pivotIdx = pivot(arr,left,right);
        quickSort(arr,left,pivotIdx-1);
        quickSort(arr,pivotIdx+1,right);
    }
    return arr;
}
console.log(quickSort([-110,2,0,-1,4,6,9,1,2,5,3]));