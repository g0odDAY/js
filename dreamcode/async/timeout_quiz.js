function runInDelay(callback,seconds){     
        if(!callback){
            throw new Error('callback 인자로 전달해야함');
        }       
        if(!seconds || seconds <0){
            throw new Error('seconds가 0보다 작아요');
        }
        setTimeout(callback,seconds*1000) 
}
runInDelay(()=>{console.log('타이머 완료');},5);