//프로토타입 객체지향 프로그래밍
function Animal(name,emoji){
    this.name=name;
    this.emoji=emoji;
}

Animal.prototype.printName=function(){
    console.log(`${this.name} ${this.emoji}`);
};

function Dog(name,emoji,owner){
    Animal.call(this,name,emoji);
    this.owner=owner;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.play=()=>{
    console.log('같이 놀자웅!');
}
const dog1 = new Dog('멍멍','dog','엘리');
dog1.play();
dog1.printName();
function Tiger(name,emoji){
    Animal.call(this,name,emoji);
}
Tiger.prototype=Object.create(Animal.prototype);
Tiger.prototype.hunt=()=>{
    console.log('hunt to time');
}

const tiger1=new Tiger('어흥','ㅇㅇㅇ');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);