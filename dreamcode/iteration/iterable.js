const array=[1,2,3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());
for(let item of array.values()){
    console.log(item);
}

const iterator=array.values();
while(true){
    const item=iterator.next();   
    if(item.done) break;
    console.log(item.value);
}

const obj={id:123,name:'Ellie'};
for(const key in obj){
    console.log(key);
}