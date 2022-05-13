function getBanana(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('banana');
        },1000);
    });
}
function getApple(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('apple');
        },3000);
    });
}
function getOrange(){
    return Promise.reject(new Error('no orange'));
}
//바나나와 사과를 같이 가지고오기
getBanana()
.then((banana)=>
    getApple()
    .then((apple)=>[banana,apple])
).then(console.log);

//promise.all 병렬적으로 한번에 모든 promise들을 실행!
Promise.all([getBanana(),getApple()])
.then(fruit=>console.log('all',fruit));

//promise.race 주어진 promise중에 제일 빨리 수행괸것이 이김!
Promise.race([getBanana(),getApple()])
.then(fruit=>console.log('race',fruit));

Promise.allSettled([getBanana(),getApple(),getOrange()])
.then(fruit=>console.log('all-settled',fruit))
.catch(console.log);
