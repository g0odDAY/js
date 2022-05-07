const obj={
    name:'엘리',
    age:20
};
obj.name;
obj.age;

function getValue(obj,key){
    return obj[key];
}
console.log(getValue(obj,'name'));
function addKey(obj,key,value){
    obj[key] = value;
}
addKey(obj,'addr','대구광역시');
console.log(obj);
function deleteKey(obj,key){
    delete obj[key];
}
deleteKey(obj,'age');
console.log(obj);