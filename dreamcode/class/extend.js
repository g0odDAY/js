// class Tiger{
//     constructor(color){
//         this.color=color;
//     }
//     eat(){
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다');
//     }
// }

// class dog{
//     constructor(color){
//         this.color=color;
//     }
//     eat(){
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log('놀자');
//     }
// }
class Animal{
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('먹자');
    }
    sleep(){
        console.log('잔다');
    }
}
class Tiger extends Animal{};
const tiger= new Tiger('노랑이');
console.log(tiger.color);
tiger.eat();

class Dog extends Animal{
    constructor(color,ownerName){
        super(color);
        this.ownerName=ownerName;
    }
    play(){
        console.log('놀자');
    }
    eat(){
        console.log('강아지가 ');
        super.eat();
        
    }
}
const dog= new Dog('빨강이','황규복');
console.log(dog.color,dog.ownerName);
dog.eat();
dog.play();