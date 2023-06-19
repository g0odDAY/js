function binarySearch(arr,number){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length-1;


    while(start<=end){
        let middle = Math.floor((start+end)/2);
        if(arr[middle]===number){
            return middle;
        }else if(arr[middle]>number){
            end=middle-1;
        }else if(arr[middle]<number){
            start=middle+1;
        }
    }
    return -1;


}
console.log(binarySearch([1,2,3,4,5,6],6));
console.log(binarySearch([1,2,3,4,5,6],2));
console.log(binarySearch([1,2,3,4,5,6],3));
console.clear();
const naive = (str,target)=>{
    let cnt = 0;
    for(let i =0;i<(str.length)-(target.length)+1;i++){
        console.log(str.slice(i,i+target.length),i);

        if(str.slice(i,i+target.length)===target){
            cnt++;
        }

    }
    console.log(cnt);
    return cnt;
}
naive('a','a');
