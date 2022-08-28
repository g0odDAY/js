const _= require('underscore');
const lodash= require('lodash');
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