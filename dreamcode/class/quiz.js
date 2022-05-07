class Counter{
    #num;
    constructor(num){
        if(isNaN(num) || num<0){
            this.#num=0;
        }else{
             this.#num=num;
        }
       
    }
    get value(){
        return this.#num;
    }
    increment=()=>{
        this.#num+=1;
    };
}
const counter=new Counter(0);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);

const counter1=new Counter('dd');
console.log(counter1.value);
