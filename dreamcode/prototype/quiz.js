class Animal{
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;
    };
    printName(){
        console.log(`${this.name} ${this.emoji}`);
    }
}
class Dog extends Animal{
    play(){
        console.log('같이 놀자웅!');
    }
}
class Dog extends Animal{
    hunt(){
        console.log('같이 사냥하중ㅇ!');
    }
}