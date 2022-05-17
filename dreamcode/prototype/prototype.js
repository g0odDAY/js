function Dog(name,emoji){
    this.name=name;
    this.emoji=emoji;
    // this.printName=()=>{
    //     console.log(`${this.name} ${this.emoji}`);
    // }
}
//프로토타입 레벨의 함수
Dog.prototype.printName=function(){
    console.log(`${this.name} ${this.emoji}`);
};
const dog1=new Dog('뭉치','dog');
const dog2=new Dog('코코','dog');
console.log(dog1,dog2);
dog1.printName();
dog2.printName();
//오버라이딩
//인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 
//프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다(ㅅㅐ도잉됨)
dog1.printName=function(){
    console.log('hihihihii');
}
dog1.printName();