//내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해
function makeCounter(){
    let count=0;
    function increase(){
        count++;
        console.log(count);
    }
    return increase;
}
const increase = makeCounter();
increase();

class Counter{
    #count=0;
    increase(){
        this.#count++;
        console.log(this.#count);
    }
}
const c=new Counter();
c.increase();