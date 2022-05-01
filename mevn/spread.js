const a =(c,...rest) =>{
    console.log(rest);
}
a(1,2,3);

const b=[1,2,3];
const a2=(a,b,c) => console.log(a,b,c);
a2(...b);

const a3 = [1,2,3,4,5];
const [head,...rest] = a3;
console.log(head,rest);

const x={"name" : "주홍철","age":27};
const y={...x,'key':1};
console.log(y);

let aa=2;
let bb=1;
[aa,bb] = [bb,aa];
console.log(aa,bb);

const d = () =>{ return {"name":"최주원","job":"마케터"} };

const {name} = d();
console.log(name);