console.log(Number.MAX_SAFE_INTEGER);
const num1=123;
const num2=new Number(123);
console.log(typeof num1);
console.log(typeof num2);
console.log(Number.MAX_VALUE);

const num3=1002;
console.log(num3.toExponential());

const num4=12354.45;
//반올림해서 문자열로 변환
console.log(num4.toFixed());
//그냥 문자열로변환
console.log(num4.toString());
//나라별 문자에 맞게 변환
console.log(num4.toLocaleString('kr'));
//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(6));
//0과 1사이에서 나타낼수있는 가장 작은 숫자
console.log((Number.EPSILON));