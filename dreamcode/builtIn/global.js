console.log(globalThis);
console.log(Infinity);
console.log();

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(parseFloat('12.16'));
console.log(parseInt('12.16'));

//URL(URI의 하위 개념)
//아스키문자로만 구성되어야함
//한글이나 특수문자는 이스케이프 처리해야된다.
const URL ='http://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded=decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 component이용
const part= '드림코드.com';
console.log(encodeURIComponent(part));