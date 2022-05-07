const lost = a =>console.log(a);
    

const ark = a =>console.log(a*2);
    

function iterate(max,action){
   for(let i=0;i <= max;i++){
        action(i);
   }
}
iterate(5,lost);
iterate(5,ark);

setTimeout(()=>{
    console.log('dfd');
},3000);