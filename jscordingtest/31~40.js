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
        console.log(acc,cur);
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
        },{});

console.log(vote)


