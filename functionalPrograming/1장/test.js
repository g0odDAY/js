
function addMaker(a){
    return function(b){
        return a+b;
    }
}
console.log(addMaker(10)(5));

let add5 = addMaker(5);
console.log(add5(3));

let users = [
    {id:1,name:'ID',age:32},
    {id:2,name:'HA',age:25},
    {id:3,name:'BJ',age:32},
    {id:4,name:'PJ',age:28},
    {id:5,name:'JE',age:27},
    {id:6,name:'JM',age:32},
    {id:7,name:'HI',age:24}
];
function filter(list,predicate){
    let new_list = [];
    for(let i = 0,len=list.length;i<len;i++){
        if(predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}
let users_under_30 = filter(users,function(users){return users.age<30});
console.log(users_under_30);

function map(list,iteratee){
    let new_list = [];
    for(let i =0,len=list.length;i<len;i++){
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}
var ages= map(users_under_30,function(user){return user.age;});
console.log(ages);

var ages = map(filter(users,function(users){return users.age<30}),function(users){return users.age;});
console.log(ages);

var name = map(filter(users,function(users){return users.age>=30}),function(users){return users.name;});
console.log(name);

function log_length(value){
    console.log(value.length);
    return value;
}
console.log(log_length(map(filter(users,function(users){return users.age<30}),function(users){return users.age;})));
console.log(log_length(map(filter(users,function(users){return users.age>=30}),function(users){return users.name;})));

function bvalue(key){
    return function(obj){
        return obj[key];
    }
}
var obj={a:'hi',b:'hello'};
console.log(bvalue('a')(obj));

console.log(log_length(map(filter(users,users => users.age > 30),bvalue('age'))));
console.log(log_length(map(filter(users,users => users.age < 30),bvalue('name'))));

var under_30 = users => users.age < 30;
var over_30 = users => users.age >= 30;
console.log("arrow",log_length(map(filter(users,under_30),user=>user.age)));

var ages = list => map(list,list =>list.name);
console.log(log_length(ages(filter(users,over_30))));
function bvalues(key){
    return function(list){
        return map(list,function(v){return v[key];});
    }
}
var ages= bvalues('age');
console.log(ages);
var under_30 =u=> u.age < 30;
console.log(log_length(ages(filter(users,under_30))));
function bvalues(key){
    let value = bvalue(key);
    return list => map(list,value);
}

console.log(filter(users,function(user){return user.id==3})[0]);

function User(id,name,age){
    this.getId=function(){
        return id;
    }
    this.getName=function(){
        return name;
    }
    this.getAge=function(){
        return age;
    }
}
var users2=[
    new User(1,'ID',32),
    new User(2,'HA',25),
    new User(3,'BJ',32),
    new User(4,'PJ',28),
    new User(5,'JE',27),
    new User(6,'JM',32),
    new User(7,'HI',24)
];
function find(list,predicate){
    for(let i=0,len=list.length;i<len;i++){
        if(predicate(list[i])) return list[i];
    }
}
console.log(find(users2,users => users.getAge() == 24).getName());

function bmatch1(key,val){
    return function(obj){
        return obj[key] === val;
    }
}
console.log('a',filter(users,bmatch1('age',32)));
console.log('a',map(users,bmatch1('age',32)));

function object(key,val){
    let obj = {};
    obj[key]= val;
    return obj;
}
function match(obj,obj2){
    for(var key in obj2){
        if(obj[key] !== obj2[key]) return false;
    }
    return true;
}
function bmatch(obj2,val){
    if(arguments.length == 2) obj2 = object(obj2,val);
    return function(obj){
        return match(obj,obj2);
    }
}

console.log(match(find(users,bmatch('id',31)),find(users,bmatch('name','BJ1'))));
console.log(find(users,function(u){return u.age == 32 && u.name =='J'}));
console.log(find(users,bmatch({name:'JM',age:32})));
function findIndex(list,predicate){
    for(let i =0,len=list.length;i<len;i++){
        if(predicate(list[i])) return i;
    }
    return -1;
}

console.log("findIndex",findIndex(users,bmatch({name:'JM',age:32})));
console.log("findIndex",findIndex(users,bmatch({name:'JM',age:321})));
_map=(list,iteratee)=>{
    let new_list=[];
    for(let i = 0,len=list.length;i<len;i++){
        new_list.push(iteratee(list[i],i,list));
    }
    return new_list;
}
_filter=(list,predicate)=>{
    let new_list=[];
    for(let i = 0,len=list.length;i<len;i++){
        if(predicate(list[i],i,list)) new_list.push(list[i]);
    }
    return new_list;
}
_find=(list,predicate)=>{
    for(let i = 0,len=list.length;i<len;i++){
        if(predicate(list[i],i,list)) return list[i];
    }
}
_findIndex=(list,predicate)=>{
    for(let i = 0,len=list.length;i<len;i++){
        if(predicate(list[i],i,list)) return i;
    }
    return -1;
}
console.log(_filter([1,2,3,4],(num,idx) => idx>0));
_identity = v => v;
console.log(_identity(10));
console.log(_identity(-1));
console.log(_identity(0));
console.log(_identity([true,0,10,'a',false,null]));
console.log(filter([true,0,10,'a',false,null],_identity));

_some = list => !!_find(list,_identity);
console.log(_some([0,null,2]));
console.log(_some([0,null,false]));
_every = list => filter(list,_identity).length == list.length;
console.log(_every([10,1,2]));
console.log(_every([0,null,false]));

const not = v => !v;
const beq = function(a){
    return function(b){
        //console.log('a',a,'b',b);
        return a===b;
    }
}
_every1 = list=> beq(-1)(findIndex(list,not));
console.log(_every1([0,null,2]));
console.log(_every1([10,1,2]));
function positive(list){
    return _find(list,_identity);
}
function negativeIndex(list){
    return _findIndex(list,not);
}
_some = list => not(not(positive(list)));
_every = list => beq(-1)(negativeIndex(list));
console.log(_some([0,null,2]));
console.log(_some([0,null,false]));
console.log(_every([0,null,2]));
console.log(_every([0,null,false]));

_compose=function(){
    let args=arguments;
    console.log("args",args);
    let start = args.length-1;
    return function(){
        let i = start;
        let result = args[start].apply(this,arguments);
        while(i--) result = args[i].call(this,result);
        return result;
    }
}
let greet =name=> `hi: ${name}`;
let exclaim = statement => statement.toUpperCase()+"!";
const welcome =_compose(greet,exclaim);
console.log(welcome("rbqhr"));
_some = _compose(not,not,positive);
_every = _compose(beq(-1),negativeIndex);

function f1() {}
let a = typeof f1 =='function' ? f1 :function(){};
console.log(a);

function f2(){
    return function (){};
}
console.log(f2());

console.log((function(a,b){return a+b})(10,9));
function callAndAdd(a,b){
    return a()+b();
}
console.log(callAndAdd(function(){return 10;},function(){return 5;}));

var a1=20;
var b1=30;
function f1(){
    return a1+b1;
}
console.log(f1());
function f2(){
    let a =20;
    let b=30;
    function f3(c,d){
        return c+d;
    }
    return f3;
}
var f4 =f2();
console.log(f4(5,7));
function ff4(){
    let a=20;
    let b=30;
    function f5(){
        return a+b;
    }
    return f5();
}
console.log(ff4());
function f6(){
    let a =39;
    function f7(b){
        return a+b;

    }
    return f7;
}
let f8 =f6();
console.log(f8(11));
console.log(f8(11));
function f9(){
    let a=10;
    let f10=function(c){
        return a+b+c;
    };
    let b=20;
    return f10;
}
let f11 = f9();
console.log(f11(30));
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function callWith(val1){
    return function(val2,func){
        return func(val1,val2);
    }
}
var callWith10 = callWith(10);
console.log(callWith10(210,add));
console.log(callWith(10)(15,add));
console.log(callWith(10)(15,sub));

console.log(callWith([1,2,3])(v=>v*2,_map));

_get = (list,idx)=> list[idx];
const callWithUsers=callWith([
    {id:2,name:'HA',age:25},
    {id:4,name:'PJ',age:28},
    {id:5,name:'JE',age:27}
]);
console.log(callWithUsers(0,_get));
console.log(callWithUsers(user => user.age > 27,_find));
console.log(callWithUsers(user => user.age > 25,_filter));
Function.prototype.partial=function (){
    let fn = this,_args=arguments;
    return function(){
        let args = Array.prototype.slice.call(_args);
        let arg = 0;
        for(var i =0;i < args.length && arg < arguments.length; i++)
            if(args[i] === undefined) args[i] = arguments[arg++];
        return fn.apply(this,args);
    };
}
function abc(a,b,c){
    console.log(a,b,c);
}
let ac = abc.partial(undefined,'b',undefined);
ac('a','c');
let ac2 =abc.partial(undefined,'b');
ac2('a','c');
function add(){
    let result = 0;
    for(let i =0;i<arguments.length;i++){
        result += arguments[i];
    }
    return result;
}
console.log(add(1,2,3,4,4444));
var add2 = add.partial(undefined,2);
console.log(add2(1,3,4,5));
add3 = add.partial(undefined,undefined,3,undefined,undefined,);
console.log(add3(1,2,4,5));
console.log(add3(50,50,50,50));
console.log(add3(150,150,150,150));
