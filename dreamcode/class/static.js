//static 정적 프로퍼티,메서드
class Fruit{
    static MAX_FRUIT=4;
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;
    }
    //클래스 레벨의 메서드
    static makeRandomFruit(){
        //클래스 레벨 의 메스드에서는 this를 참조할수없음.
        return new Fruit('banana','🍉');
    }
    //인스턴스 레벨의 메서드
    display=()=>{
        console.log(`${this.name}:${this.emoji}`);
    };
};
const banana=Fruit.makeRandomFruit();
console.log(banana.name,banana.emoji);
console.log(Fruit.MAX_FRUIT);
const apple=new Fruit('apple','🍊');
apple.display();