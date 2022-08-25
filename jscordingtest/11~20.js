//11
let s = 0;
for(let i =1;i<=100;i++){
    s +=i;
}
console.log(s);

//12
class Wizard{
    constructor(hp,mp,armor) {
        this.hp = hp;
        this.mp = mp;
        this.armor = armor;
    }
    attack(){
        console.log('파이어볼');

    }
}
const x = new Wizard(545,210,10);
console.log(x.hp,x.mp,x.armor);
x.attack();

//13
const xx= ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
const yy = num => xx[num-1];
console.log(yy(2));

//14
const third = num => num % 3 === 0 ? '짝수': num;
console.log(third(33331));

//15
const hi = name => `안녕하세요. 저는${name}입니다.`;
console.log(hi('김다정'));

//16
let str = '거꾸로';
console.log([...str].reverse());

//17
const restrict = height => height >= 150 ? 'YES':'NO';
console.log(restrict(16));

//18
const avg = str => {
    const tmp = str.split(' ');
    let sum = 0;
    tmp.forEach(num=>{
        sum+=parseInt(num);
    });
    return sum/tmp.length;



}
console.log(avg('200 30 40'));

//19
const root = str =>{
    let tmp = str.split(' ');
    const a = parseInt(tmp[0]);
    const b = parseInt(tmp[1]);
    let sum =1;
    for(let i=1;i<=b;i++){
        sum = sum*a;
    }
    return sum;
};
console.log(root('3 4'));

//20
const division = str =>{
    let tmp = str.split(' ');
    let a = parseInt(tmp[0]);
    let b = parseInt(tmp[1]);
    return `${a/b} ${a%b}`;
}
console.log(division('11 2'));

