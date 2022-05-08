const text='Hello World';
for(let i=0;i<text.length;i++){
    console.log(text[i]);
}

const ids='user1,user2,user3,user4';
let tempIds=ids.split(',');
console.log(tempIds);

setInterval(()=>{
    console.log(new Date);
},1000);