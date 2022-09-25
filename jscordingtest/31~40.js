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

// 강사님 코드
let n = 5;
let scores = [100, 88, 76, 88, 76];

console.log(solution(n, scores));

function solution(n, scores) {
    let answers = Array.from({ length: n }, () => 1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (scores[j] > scores[i]) {
                answers[i]++;
            }
        }
    }
    return answers;
}
const regex = /\d{3}-\d{3}-\d{4}/;
console.log(regex.test('010-123-4567'));
console.log(regex.test('010-1223-4567'));
console.log(regex.test('010-d23-4567'));

const text = "안녕하세요 제 번호는 010-123-4567이고, 010-123-4567입니다.";
console.log(text.replace(regex, '111-111-1111'));
console.log(text.match(regex));

const text1 = '대나무 빨대 a급 제품은 10개 남아있습니다. 010-1234-5678로 Call Me~!';
const regex1 = /[^0-9]/g;
console.log(regex1.test(text1));
console.log(text1.match(regex1));

const tel = '01039575452';
const telregex = /\d(?=\d{4})/g;
console.log(tel.match(telregex, tel));

