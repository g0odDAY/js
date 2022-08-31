const _= require('underscore');
const lodash= require('lodash');
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("...");
const $ = require("jquery")(window);
[1,2,3].forEach((val,idx,list)=>console.log(val,idx,list));
_.each({a:1,b:2},(val,idx,obj)=> console.log(val,idx,obj));
let users = [
    {id:1,name:'ID',age:32,team_id:2},
    {id:2,name:'HA',age:25,team_id:2},
    {id:3,name:'BJ',age:32,team_id:1},
    {id:4,name:'PJ',age:28,team_id:1},
    {id:5,name:'JE',age:27,team_id:2},
    {id:6,name:'JM',age:32,team_id:1},
    {id:7,name:'HI',age:24,team_id:2}
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
            new_list.push(iteratee(data[i],i,data));
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