const arrayMergeSort = (arr1,arr2)=>{
    let result = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else if(arr1[i]>arr2[j]){

            result.push(arr2[j]);
                j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;

}
console.log(arrayMergeSort([2,14,99,100],[1,10,50]));

const mergeSort = (arr)=>{
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return arrayMergeSort(left,right);
}
console.log(mergeSort([10,24,76,73,72,1,9]));