const _ = require('underscore');
const hi = _.once(function(){
   console.log("hi");
});
hi();
hi();
_.once = function(func){
    let flag,result;
    return function(){
        if(flag) return result;
        flag = true;
        console.log(arguments);
        return result = func.apply(null,arguments);
    }
};
let a = _.once(function(){
    console.log("a");
    return "b";
})
console.log(a());
console.log(a());

function skip(body){
    let yes;
    return function(){
        return yes || (yes = body.apply(null,arguments));
    }
}
Array.prototype.getMax = (arr) => {
    return arr.map(n => n * 2);
}
console.log(Array.prototype.getMax([1,2,3,4,5,6,7,8,9,10]));