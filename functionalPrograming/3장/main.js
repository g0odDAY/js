const _= require('underscore');
const lodash= require('lodash');
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("...");
const $ = require("jquery")(window);
[1,2,3].forEach((val,idx,list)=>console.log(val,idx,list));
_.each({a:1,b:2},(val,idx,obj)=> console.log(val,idx,obj));
let users = [
    {id:1,name:'ID',age:32},
    {id:2,name:'HA',age:25},
    {id:3,name:'BJ',age:32},
    {id:4,name:'PJ',age:28},
    {id:5,name:'JE',age:27},
    {id:6,name:'JM',age:32},
    {id:7,name:'HI',age:24}
];

console.log(_.pluck(users,'name'));
var list = _.range(200);
//
var _i = 0;
var result1 = _.chain(list)
                .filter((num)=>{
                    _i++;
                    return num %2 ==0;

                })
                .take(5)
                .value();
console.log(result1,_i);
//
var lodash_i = 0;
var result2 = lodash.chain(list)
                .filter((num)=>{
                    lodash_i++;
                    return num %2 ==0;

                })
                .take(5)
                .value();
console.log(result2,lodash_i);

var list2 =[];
var limit = 10;
_.find(list,num => num %2 == 0 && list2.push(num) == limit);
console.log(list2);
const filter2=function (data,predicate,limit){
    let list2=[];
    _.find(data,function(val,key,data){
        return predicate(val,key,data) && list2.push(val) == limit;
    })
    return list2;
};
console.log(filter2(list,num => num%2 == 0,7));

console.log(filter2(list,num => num%2 ==0,10));

mul10 = num => num * 10;
sub10 = num => num - 10;
square = num => num * num;

var list = [1,2,3,4,5,6];

var result2 = _.chain(list)
    .map(mul10)
    .map(sub10)
    .map(square)
    .value();
console.log(result2);

var result2= _.map(list,num => square(sub10(mul10(num))));
console.log(result2);

var me = {id:3,name:"BJ",age:32};
var query = _.chain(users)
    .filter(user => user.age == me.age)
    .reject(user => user.id == me.id);

var d1 = {name : 'PJ',age : 25};

var d2 = [1,2,3];

var d3 = function (){
    return arguments;
}(1,2,3);

var d4 = $('div');

var d5 = {length:3};

d5[0] = 1, d5[1]=2, d5[2] = 3;
var d6 = "hi";

console.log(_.map({a:3,b:3,c:3},v => v*2));




var MAX_ARRAY_INDEX = Math.pow(2,53)-1;

function getLength(list) {
    return list == null ? void 0 : list.length;
}

var isArrayLike = list =>{
    let lenght = getLength(list);
    return typeof lenght == 'number' && lenght >= 0 && lenght <= MAX_ARRAY_INDEX;
};

 map1 = (data, iteratee)=>{
    let new_list = [];
    if(isArrayLike(data)){
        for(let i=0,len=data.length;i<len;i++){
            new_list.push(iterate(data[i],i,data));
        }
    }else{
        for(let key in data){
            if(data.hasOwnProperty(key)) new_list.push(iteratee(data[key],key,data));
        }
    }
    return new_list;
};
console.clear();
console.log(map1({a:3,b:3,c:3},function (n){
    return n*this;
}.bind(4)));
const idtt = _.identity;
_.values = list => _.map(list,_.identity);
console.log(_.values({id:5,name:"JE",age:27}));
console.log(_.identity({id:5,name:"JE",age:27}));
arg1 = function(a,b){
    return b;
}
_.keys = list => _.map(list,arg1);
console.log(_.keys({id:5,name:"JE",age:27}));
console.log(arg1({id:5,name:"JE",age:27}));

_.each = (list,iteratee)=>{
    if(isArrayLike(list)){
        for(let i =0,len=list.length;i<len;i++){
            iteratee(list[i],i,list);
        }
    }else{
        for(let key in list){
            if(list.hasOwnProperty(key)) iteratee(list[key],key,list);
        }
    }
    return list;
}
_.each([1,2,3],console.log);
_.each({name:"rbqhr",id:9,age:30},console.log);

function bloop(new_data,body){
    return function(data,iteratee){
        let result = new_data(data);
        if(isArrayLike(data)){
            for(let i = 0,len=data.length;i<len;i++){
                body(iteratee(data[i],i,data),result);
            }
        }else{
            for(let key in data){
                if(data.hasOwnProperty(data[key])) body(iteratee(data[key],key,data),result);
            }
        }
        return result;
    }
}
console.clear();
_.map = bloop(() => [],(val,obj)=> obj.push(val));
_.each = bloop(v => v,()=>{});
_.each([1,2,3],console.log);
//_.each({name:"rbqhr",id:9,age:30},console.log);
console.log("map",_.map([1,2,3,4],v=> v*9));

_.object = obj =>{
    var type = typeof obj;
    console.log("!!obj",!!obj);
    return type === 'function' || type === 'object' && !!obj;
}
// console.log(_.object({name:"rbqhr"}));
// console.log(_.object([1,2,3,4]));
console.log(_.object(10));
console.log(_.object(null));
console.log(typeof 10);
console.log(typeof null);
_.keys = obj => _.object(obj) ? Object.keys(obj) : [];
// console.log(_.keys({name:"rbqhr"}));
// console.log(_.keys([1,2,3,4,]));
// console.log(_.keys(10));
// console.log(_.keys(undefined));
_.filter((list,predicate)=>{
    let new_list =[];
    _.each(list,(val,idx,list)=>{
        if(predicate(val,idx,list)) new_list.push(val);
    })
    return new_list;
});
let obj = {
    a:1,
    b:2,
    c:3
};
console.log(_.filter(obj,v=>v>1));
const bloop1 = (new_data,body)=>{
    return (data,iter_predi) =>{
        let result = new_data(data);
        if(isArrayLike(data)){
            for(let i = 0 ,len=data.length;i<len;i++){
                body(iter_predi(data[i],i,data),result,data[i]);
            }
        }else{
            for(let i =0,len=data.length;i<len;i++){
                body(iter_predi(data[keys[i]],keys[i],data),result,data[keys[i]]);
            }
        }
    }
    return result;

}
_.array = () => [];
_.filter=bloop1(_.array,(bool,result,val)=> {
    if(bool)result.push(val)
});

_.toArray(arry=>{
    return Array.from(arry) ? arry : _.values(arry);
})
_.rest((arr,idx)=>{
    return _.toArray(arr).slice(idx || 1);
});

function reverseFnc(arr){
    return _.toArray(arr).reverse();
}
console.log(reverseFnc([1,2,3]));
console.log(reverseFnc({}));

const rester = (func,num)=>{
    return () => func.apply(null,_.rest(arguments,num));
};

const sum = (a,b,c,d)=>(a||0)+(b||0)+(c||0)+(d||0);

console.log(rester(sum,1)(1,2,3,4));

_.if=function (vali,func,alter){
    return function(){
        console.log("ifs",arguments);
        console.log("ifs",vali.apply(null,arguments));
        return vali.apply(null,arguments) ? func.apply(null,arguments) : alter && alter.apply(null,arguments);
    }
}

function sub(a,b){
    return a-b;
};

let sub2 = _.if(
    function(a,b){return a>=b;},
    sub,
    function() {return new Error("a가 b보다 작습니다.")}
)

console.log(sub2(4,3));
_.toArray2 = _.if(Array.isArray,idtt,_.values);
console.log(_.toArray2([1,2,3]));
console.log(_.toArray2({0:1,1:3,length: 2}));

_.constant = function(v){
    return function(){
        return v;
    }
};

let squared = _.if(
    function(a){ return toString.apply(a) == '[object Number]';},
    function(v){ return v*v},
    _.constant(0)
);
console.log(squared(5));
console.log(squared("rks"));
console.log(toString.apply(8));
console.log(toString.apply("rksdlf"));
_.negate = function(func){
    return function(){
        return !func.apply(null,arguments);
    }
}
_.reject = bloop(_.array,_.if(_.negate(_.idtt),rester(_.push)));


function bloop(new_data,body,stopper){
    return function(data,iter_predi){
        let result = new_data(data);
        let memo;
        if(isArrayLike(data)){
        for(let i =0,len = data.length;i<len;i++) {
            memo = iter_predi(data[i], i, data);
            if (!stopper) body(memo, result, data[i], i);
            else if (stopper(memo)) return body(memo, result, data[i], i);
        }
        }else{
            for(let i =0,keys = _.keys(data),len=keys.length;i<len;i++){
                memo = iter_predi(data[keys[i]],keys[i],data);
                if(!stopper) body(memo,result,data[keys[i]],keys[i]);
                else if(stopper(memo)) return body(memo,result,data[keys[i]],keys[i]);

            }
        }
        return result;
    }
}

_.noop = function() {};
_.idtt = function(v) {return v;};
_.find = bloop(
    _.noop,
    function(bool,result,val){return val;},
    _.idtt
);
console.log(_.find([10,20,30,40,50],v => v > 320));

_.findIndex = bloop(_.constant(-1),rester(_.idtt,3),_.idtt);
console.log(_.findIndex([1,2,3,4,5],function(v){return v<2}));

console.log(_.reduce([1,2,3],function(memo,val,idx,list){
    console.log("memo:",memo,"val:",val,"idx:",idx,"list:",list);
    return memo+val;
},0));
console.log(_.reduce([[0,1],[2,3],[4,5]],function(memo,val,idx,list){
    console.log("memo:",memo,"val:",val,"idx:",idx,"list:",list);
    return memo.concat(val);
},[]));

console.log(_.reduce(users,function(names,user){
    if(user.age >= 30) names.push(user.name);
    return users;
},[]));
let users1 = [
    {id:1,name:'ID',age:32},
    {id:2,name:'HA',age:25},
    {id:3,name:'BJ',age:32},
    {id:4,name:'PJ',age:28},
    {id:5,name:'JE',age:27},
    {id:6,name:'JM',age:32},
    {id:7,name:'HI',age:24}
];
console.log(_.reduce(users1,function(info,user){
    let group = user.age - user.age % 10;
    info.count[group] = (info.count[group] || 0) +1;
    info.total[group] = (info.total[group] || 0) +user.age;

    return info;
},{count:{},total:{}}));

_.reduce = (data,iteratee,memo) =>{
    _.each(data,(val,idx,data)=>{
        memo = iteratee(memo,val,idx,data);
    });
    return memo;

}
