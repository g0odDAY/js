//static 정적 프로퍼티,메서드
class Fruit{
    #name;
    #emoji;   
    #type="과일";
    constructor(name,emoji){
        this.#name=name;
        this.#emoji=emoji;
    }
    //인스턴스 레벨의 메서드
    #display=()=>{
        console.log(`${this.#name}:${this.#emoji}`);
    };
};
const apple=new Fruit('apple','🍊');

console.log(apple);