//1번 다음 배열에서 400,500을 제거하세요.
var nums = [100,200,300,400,500];
console.log(nums.filter(num => num!=400&&num!=500));

//2번
var arr = [200,100,300];
arr.splice(-1,0,10000);
console.log(arr);

//3번
var arr = [100,200,300];
console.log(typeof(arr));
//object

//4번
var a = 2.22;
var b = 'p';
console.log(typeof(a));
console.log(typeof(b));

//5번
var a = 10;
var b = 2;
for (var i = 1;i<5;i+=2){
    console.log(i);
    a += i;
}
console.log(a+b);

//6번
//false 로 취급하는것  NaN, 1 ,"" ,Undefined

//7번
//변수로 사용할수 없는 것 &age,let

//8번
var d ={
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':11
}
console.log(d['weight']);

//9번
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/',month,'/',day,' ',hour,':',minute,':',second);
console.log(result);

//10번
const makeTree = num =>{
    let sum = '*';
    for(let i=1;i<=num;i++){
        console.log(i,sum);
        sum +='**';
    }
}
console.log(makeTree(5));

