const addfnc = (n1:number,n2:number):number=>{
    return n1 + n2;
}
const printResult = (num:number):void=>{
    console.log('Result: '+num);
}
const addAndHandle = (n1:number,n2:number,cb:(num:number)=>void)=>{
    const result = n1+n2;
    cb(result);
}
let combineValues:(a:number,b:number)=>number;
combineValues = addfnc;

console.log(combineValues(5,5));
addAndHandle(10,20,(result)=>{
    console.log(result);
})