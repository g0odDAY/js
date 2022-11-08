//31

//32
const strLength = str => str.split(' ').length;
console.log(strLength('안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.'));

//33
const reverse = num => num.split(' ').reverse();
console.log(reverse('1 2 3 4 5'));

//34
const arr = [1,2,3,4,5];
const arr1 = [169,176,156,155,165,166];
function sortYN(arr){
   if(JSON.stringify(arr) === JSON.stringify(arr.sort())) return 'YES';

   return 'NO';
}

console.log(sortYN(arr1));


//35
function one(n){
    function two(value){
        return Math.pow(n,value) ;
    }
    return two;
}

const a = one(3);
console.log(a(10));

//36
function gugudan(num){
    for(let i = 1;i<10;i++){
        console.log(num * i);
    }
}
gugudan(9);


//37

var arr11 = ['원범','원범','혜원','혜원','혜원','혜원','유진','유진'];
const vote = arr11.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
        },{});
console.log(vote)
let winner = Object.keys(vote).reduce((a,b)=>{
    return vote[a] > vote[b] ? a:b;
})
console.log(`${winner}${vote[winner]}`);

//38

var arr37 = [97,86,75,66,55,97,85,97,97,95];
console.log(arr37.reduce((acc,cur)=>{
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
},{}));


let n = 5;
let scores = [97,86,75,66,55,97,85,97,97,95];
scores.map(n=> parseInt(n,10));
scores.sort((a,b)=> a-b);
console.log("sc",scores);
let cnt = 0;
let arr38 = [];

while(arr38.length < 3){
    let n = scores.pop();  //55
    console.log("n",n);
    if(!arr38.includes(n)){// false -> true
        arr38.push(n);
    }
    cnt +=1;
}

console.log(arr38);
console.log("cnt",cnt);

//39

let str39 = 'hqllo my namq is hyqwon';

console.log(str39.split('').map(n=>n.charCodeAt(0)).map(n=> n === 113 ? 101 : n).map(n=>String.fromCharCode(n)).join(''));

//40

const restrict = 50;
const people = 5;
const arr40 = [50,5,40,20,20,20];
let sum40 = 0;
let cnt40 = 0;
arr40.map(n =>{
    sum40 += n;
    if(sum40 <= restrict){
        cnt40++;
    }
});
console.log(cnt40);
