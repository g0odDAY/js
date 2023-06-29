type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
const addapp = (
    n1:Combinable,
    n2:Combinable,
    resultConversion:ConversionDescriptor
)=>{
    let result;
    if(resultConversion==='as-text'){
        result = n1.toString() + n2.toString();
    }else{
        result = +n1 + +n2;
    }
    return result;
}


class Department {

    private employees:string[] = [];
    constructor(private id:string,public name:string) {
        this.name = name;
        this.id = id;
    }
    describe(){
        console.log(`Department(${this.id}):${this.name}`);
    }
    addEmployee(emp:string){
        this.employees.push(emp);
    }
    printEmp(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ItDepartment extends Department{
    constructor(id:string,public  admins:string[]) {
        super(id,'IT');
        this.admins = admins;
    }
}
const department = new ItDepartment('a1',['max','manu']);
console.log(department);
department.describe();


department.printEmp();
interface AddFn {
    (a:number,b:number):number
}
//type AddFn = (a:number,b:number)=>number;

let addt : AddFn;
addt = (n1:number,n2:number)=>{
    return n1+n2;
}
interface Named{
    readonly name:string;
    outputName?:string;
}
interface Greetable extends Named{

    greet(phrase:string):void;
}

class Person implements Greetable,Named{
    name: string;

    constructor(name:string) {
        this.name=name;

    }

    greet(phrase: string): void {
        console.log(phrase+this.name);
    }

}
let user1:Greetable;
user1 = new Person('max');

user1.greet('hi i am');

interface Admin{
    name:string;
    privileges:string[];
}
interface Employee{
    name:string;
    startDate:Date;
}
// interface ElevatedEmployee extends Employee,Admin{
//
// }
type ElevatedEmployee = Admin & Employee;
const e1:ElevatedEmployee ={
    name:'max',
    privileges:['create-server'],
    startDate:new Date(),
}
type Combineable = string | number;
type Numeric = number |boolean;
type Universal = Combineable & Numeric;
function addC(a:Combineable,b:Combineable){

}
type UnknownEmp = Employee | Admin;
function printEmpInformation(emp:UnknownEmp){
    console.log('name'+emp.name);
    //console.log('privileges'+emp.privileges)
}
class Car{
    drive(){
        console.log('Driving...');
    }
}
class Truck{
    drive(){
        console.log('Driving...');
    }
    loadCargo(amount:number){
        console.log('loading cargo...'+ amount)
    }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle:Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }

}
useVehicle(v1);
useVehicle(v2);
interface Bird{
    type:'bird';
    flyingSpeed:number;

}
interface Horse{
    type:'horse';
    runningSpeed:number;
}
type Animal = Bird|Horse;
function moveAnimal(animal:Animal){
    let speed;

    switch (animal.type){
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed:'+ speed);

}
moveAnimal({type:'bird',flyingSpeed:10000});
//let userInput2 = <HTMLInputElement>document.getElementById('user_input')!;
let userInput2 = document.getElementById('user_input')! as HTMLInputElement;
userInput2.value='hi there!';
interface ErrorContainer{
    [prop:string]:string;
}
const errorBag : ErrorContainer={
    email:'Not a valid email',
    username:'Must start with ad capital character'
};
const fetchData ={
    id:'f1',
    name:'max',
    job:{title:'CEO',description:'My own company'}
}

console.log(fetchData?.job?.title);
const userInput24 = '';
const storedData = userInput24?? 'DEFAULT';
console.log(storedData);