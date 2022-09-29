const regex = /\d{3}-\d{3}-\d{4}/;
console.log(regex.test('010-123-4567'));
console.log(regex.test('010-1223-4567'));
console.log(regex.test('010-d23-4567'));

const text = "안녕하세요 제 번호는 010-123-4567이고, 010-123-4567입니다.";
console.log(text.replace(regex, '111-111-1111'));
console.log(text.match(regex));

const text1 = '대나무 빨대 a급 제품은 10개 남아있습니다. 010-1234-5678로 Call Me~!';
const regex1 = /[^0-9]/g;
const regex12 = /\w/g;
console.log(regex1.test(text1));
console.log("ddd",text1.match(regex1));
let texArray = text1.match(regex12);
console.log("textArray",texArray.reduce((acc,cur)=>{
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
},{}));
const tel = '01039575452';
const telregex = /\d(?=\d{4})/g;
console.log(tel.match(telregex, tel));