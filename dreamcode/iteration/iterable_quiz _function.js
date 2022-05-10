//[Symbol.iterator]():IterableIterator<T>;
//0부터 10이하까지 숫자의 2배를 순회하는 이터레이터만들기
function makeIterable(start,end,callback){
    return {
    [Symbol.iterator]:()=>{     
        return {
            next(){
                return {value: callback(start++),done: start > end};
            },
        };
    },
}
};
const multiple=makeIterable(1,20,(num)=>num*2);
for (const num of multiple){
    console.log(num);
}