class Queue{
    constructor(){
        this.a = [];
    }
    front(){
        if(this.a.length === 0){
            console.log('큐가 비엇습니다,');
            return;
        }else{
            return this.a[0];
        }
    }
    enqueque(value){
        this.a.push(value);
    }
    dequeque(){
        if(this.a.length === 0){
            console.log('큐가 비엇어요.');
            return;
        }
        this.a.shift();
    }
}
const q = new Queue();
q.enqueque(2);
q.enqueque(1);
q.enqueque(3);
q.enqueque(4);
for (let i =0;i<4;i++){
    console.log(q.front());
    q.dequeque();
}

let arry = [1,2,34,5];
arry.shift();
console.log(arry);

const j1=() =>{
    const b=Math.random()*100;
    setTimeout(()=>{
        console.log(1);
        j2();
    },b);
};

const j2 = () =>{
    const b=Math.random()*100;
    setTimeout(()=>{
        console.log(2);
        j3();
    },b);
};

const j3 = () =>{
    const b=Math.random()*100;
    setTimeout(()=>{
        console.log(3);
    },b);
}

j1();

const a = (c='네이버')=>{
    return new Promise((resolve,reject)=>{
        throw new Error("[큰돌에러]")
        reject(new Error("[큰돌에러]"))
        reject('[큰돌에러]')
        setTimeout(()=>{
            resolve(`${c}로부터 받은사랑`);
        },1*1000);
    });
}
a().then(ret => {
    console.log(ret);
    return a(`카카오`);
}).then(ret =>{
    console.log(ret);
}).catch(e=>{
    console.log(`${e}라는 에러가 발생햇어`);
});
console.clear();
const async1 = param =>{
    return new Promise((resolve,reject)=>{
        resolve(param*2);
    });
};

const async2 = param =>{
    return new Promise((resolve,reject)=>{
        throw '에러';
        resolve(param*2);
    });
};

async1(1)
.then(async2)
.then(result => {
    console.log(result)
})
.catch(reason =>{
    console.log(`이 promise는 이 ${reason}으로 종료가 되엇다.`);
})
.finally(()=>{
    console.log(`이 로직은 promise 이후에 무조건 실행되는 로직입니다,`);
});

const async=(message,ret)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            console.log(new Date());
            resolve(ret);
        },2000)
        
    });
};
const promises = [async("비동기함수1발동",1),async("비동기함수2발동",2)];
Promise.all(promises)
.then(data =>{
    console.log(data);
})