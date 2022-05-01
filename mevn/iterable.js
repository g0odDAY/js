const a =['사과','딸기','포도','배'];
console.log(Symbol.iterator in a);
for(const b of a)
console.log(b);
console.clear();
let mp = new Map();
mp.set('사과','딸기');
mp.set('포도','배');
console.log(mp.get('포도'));
const it=a[Symbol.iterator]();
console.log(it.next());
const log = console.log;
function* gen(){
    yield 10
    if(false) yield 20
    yield 30
    return 90
    yield 30
}
let iter = gen()
console.log(iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
const _= require("fxjs/Strict");
const L=require("fxjs/Lazy");
const C=require("fxjs/Concurrency");
const z=[1,2,3,4,5,6,7,8,9];
const ret=_.go(
    z,
    _.map(z=>z),
    _.filter(z=>z%2),
    _.take(2)
);
console.log(ret);