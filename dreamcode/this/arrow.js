const dog={
    name:'Dog',
    play:function(){
        console.log('shsek');
    }
}
dog.play();
const obj=new dog.play();
console.log(obj);

const cat={
    name:'cat',
    play(){
        console.log('애옹애옹');
    }
}
cat.play();

//화살표 함수 특징
//1.문법이 깔끔함
//2.생성자 함수로 사용이 불가능
//3.함수 자체 arguments
//4.this에 대한 바인딩이 정적으로 결정됨.