//오브젝트는 단 하나의 prototype을 가리킬 수 있다(부모는 단 하나!)
//하지만 ! 여러개의 함수르 ㄹ상속하고 싶다.
//Mixin
const play={
    play:function(){
        console.log(`${this.name}놀아요!`);
    }
}
const sleep={
    sleep:function(){
        console.log(`${this.name}자요!`);
    }
}
function Dog(name){
    this.name=name;
}
Object.assign(Dog.prototype,play,sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.sleep();
dog.play();