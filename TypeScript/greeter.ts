class Student{
    fullName:string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string) {
        this.fullName = firstName + "" +middleInitial+""+lastName;
    }
}
interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person) {
    return "Hello, " + person.firstName+""+person.lastName;
}

let user = new Student("JANE","M.","User");

document.body.textContent = greeter(user);
interface LabeledValue{
    label:string;
    size:number;
    name:Array<Number>;
}
function printLabel(labeledObj:LabeledValue){
    console.log(labeledObj.label,labeledObj.size,labeledObj.name);
}
let myObj = {size:10,label:"size 10 object",name:[1,2,3]};
printLabel(myObj);

interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig) : {color:string;area:number}{
    let newSquare = {color:"white",area:100};
    if(config.color){
        newSquare.color = config.color;

    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color:"black"});
console.log(mySquare);

interface Point{
    readonly x:number;
    readonly y:number;

}
let p1:Point ={x:10,y:20};
// p1.x=22;
let strArry :Array<String> =["a","d","cd"];
console.log(strArry);

interface SearchFunc{
    (source:string,subString:string):boolean;
};

let mySearch:SearchFunc;
mySearch = function(src,sub){
    let result = src.search(sub);
    return result > -1;
};


interface StringArray{
    [index:number] : string;
};
let myArray:StringArray;
myArray=["bob","fred"];

let myStr:string = myArray[0];

class Animal{
    name:string;
}
class Dog extends Animal{
    breed:string;
}

// interface NotOkay{
//     [x:number]:Animal;
//     [x:string]:Dog ;
//
// }