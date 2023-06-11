function addUpTo(n){
    let total = 0;
    for (let i=1;i<=n;i++){
        total+=i;
    }
    return total;
}
let t1 = performance.now();
addUpTo(10000000000);
let t2 =performance.now();
console.log(`first function tiem elapsed: ${(t2-t1)/1000} seconds.`)

function addUpto(n){
    return n * (n+1)/2;
}
let time1 = performance.now();
addUpto(10000000000);
let time2 =performance.now();
console.log(`seconds function time elapsed: ${(time2-time1)/1000} seconds.`)