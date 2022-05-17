//글로벌 컨텍스트의 this
//-브라우저:
//-노드: 모듈
console.log(this);
const x=0;
module.exports.x=x;
console.log(this);
console.log(globalThis);