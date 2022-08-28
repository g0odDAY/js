
let obj={a:1,"b":2};
obj.c= 3;
obj['d']=4;
let e = 'e';
obj[e] = 5;
function f(){return 'f'};
obj[f()] = 6;
console.log(obj);

let obj2 = {"a a a":1};
obj2['b b b']=2;
console.log(obj2);
const number = 1;
let obj5 = {[number > 1 ? "a" : "b"]:1};
console.log(obj5);
let obj10 = [];
obj10.a=1;
obj10.b=2;
console.log(obj10);
console.log(obj10.length);


function add1(a,b){
    return a+b;
}
let add2=function(a,b){
    return a+b;
}

function add(a,b){
    return valid() ? a+b : new Error();
    function valid(){
        return Number.isInteger(a) && Number.isInteger(b);
    }
}
console.log(add(120,1));
//console.log(add(120,'1'));
function f1(){
    return function (a){
        console.log(a);
    }(1);
}
f1();

!function(a){
    console.log(a);
}(1);

true && function(a){
    console.log(a);
}(2);

1 ? function(a){
    console.log(a)
}(3) : 5;

0,function (a){
    console.log(a);
}(7);
var b = function(a){
    console.log(a);
}(9);

let pj = new function(){
    this.name = 'PJ';
    this.age = 28;
    this.constructor.prototype.hi=function (){
        console.log('hi');
    }
}
console.log(pj);
pj.hi();
var a = function (a){
    console.log(this,a);
}.call([1],1);

var a = eval('10+5');
console.log(a);
var add = new Function('a,b','return a+b;');
console.log(add(10,5));

function L(str){
    let splitted = str.split('=>');
    return new Function(splitted[0],'return ('+splitted[1]+');');
}
console.log(L('n => n*10')(10));

console.time('익명 함수');
for(let i = 0;i<10000;i++){
    (function(v){return v;}(i));
}
console.timeEnd('익명 함수');
console.time('new function');
for(let i = 0;i<10000;i++){
    L('v => v')(i);
}
console.timeEnd('new function');

var hi = 1;
var hello = function hi(){
    console.log(hi);
};
hello();
console.log(hello.name == 'hi');
console.clear();
function flatten(arr){
    return function f(arr,new_arr){
        arr.forEach(function(v){
            console.log("v",v);
            Array.isArray(v) ? f(v,new_arr) : new_arr.push(v);
            console.log("new_arr",new_arr);
        });
        return new_arr;

    }(arr,[]);
}

console.log(flatten([1,[2],[3,4]]));
function test(a,b,c){
    console.log("abc",a,b,c);
    console.log('this',this);
    console.log('arguments',arguments);
}
test(10);
test(10,undefined);
test(10,20,30);
function test2(a,b){
    b = 10;
    console.log(arguments);
}
test2(1);
test2(1,2);
function test3(a,b){
    arguments[1]=10;
    console.log(b);
}
test3(1,2);
let o1 = {name:"obj1"};
o1.test = test;
o1.test(3,2,1);

let a1 = [1,2,3];
a1.test = test ;
a1.test(3,3,3);

let o1_test = o1.test;
o1_test(5,6,7);
(a1.test)(8,9,10);
a1['test'](8,9,10);

test.call(undefined,1,2,3);
test.call(null,1,2,3);
test.call(void 0,1,2,3);
test.call(o1,3,2,1);
test.call(1000,3,2,1);
o1.test.call(undefined,3,2,1);
o1.test.call([50],1,2,3);
console.clear();
test.apply(o1,{0:3,1:2,2:1,length:3});
(function(){
    test.apply(1000,arguments);
})(3,2,1);
console.clear();
(function(){
    arguments.length--;
    test.apply(1000,arguments);
})(3,2,1);

test.apply(1000,[1].concat([2,3]));
console.clear();
let slice = Array.prototype.slice;
function toArray(data){
    return slice.call(data);
}
function rest(data,n){
    return slice.call(data,n||1);
}
let arr1= toArray({0:1,1:2,length: 2});
console.log(arr1);
arr1.push(3);
console.log(arr1);

console.log(rest([1,2,3]));
console.log(rest([1,2,3],1));

var a =false;
var c = a ? 10 : function f(arr,v){
    return arr.length ? f(arr,v + arr.shift()) : v;
}([1,23,33],77);
console.log("c",c);