class Employee{    
    constructor(name,department,hourPerMonth,payRate){
        this.name=name;
        this.department=department;
        this.hourPerMonth=hourPerMonth;
        this.payRate=payRate;
    }
    caculatePay(){
        return this.hourPerMonth * this.payRate+'원';
    }
}

class FullTimeEmployee extends Employee{
    static #PAY_RATE=10000;
    constructor(name,department,hourPerMonth){
        super(name,department,hourPerMonth,FullTimeEmployee.#PAY_RATE);
    }
};
class PartTimeEmployee extends Employee{
    static #PAY_RATE=8000;
    constructor(name,department,hourPerMonth){
        super(name,department,hourPerMonth,PartTimeEmployee.#PAY_RATE);
    }
};
const ellie=new FullTimeEmployee('엘리','s/w',20);
const bob=new PartTimeEmployee('밥','s/w',30);
console.log(ellie.caculatePay());
console.log(bob.caculatePay());

