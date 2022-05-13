function a(){
    throw new Error('error!');
}

function b(){
    try{
      a();  
    }catch(error){
        console.log('생각해보니간 이 에러는 내가 핸등링 할 수 없을 거같아.');
        throw error;
    }
    
}
function c(){
    
    b();
}

try{
    c();
}catch(error){
    console.log('catched');
}
console.log('done');