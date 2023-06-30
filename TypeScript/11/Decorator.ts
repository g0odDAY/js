const Logger=(logString:string)=>{
    return (constructor:Function)=>{
        console.log(logString);
        console.log(constructor);
    }

}
const WithTemplate=(template:string,hookId:string)=>{
    return <T extends {new(...args:any[]):{name:string}}>(originalConstructor:T)=>{
        return class extends originalConstructor{
            constructor(..._:any[]) {
                super();
                const hookEl = document.getElementById(hookId);
                const p = new originalConstructor();
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

//@Logger('Person-Logging..')
@WithTemplate('<h1>My person Object</h1>','app')
class PersonD{
    name='Max';
    constructor() {
        console.log('Creating person object...')
    }
}



// const personD = new PersonD();
// console.log(personD);
const Log = (target:any,propertyName:string|symbol)=>{
    console.log('Property decorator!!');
    console.log(target,propertyName);
}
const Log2 = (target:any,name:string,descriptor:PropertyDescriptor)=>{
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log3 = (target:any,name:string|symbol,descriptor:PropertyDescriptor)=>{
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log4 = (target:any,name:string|symbol,position:number)=>{
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product{
    @Log
    title:string;
    _price:number;

    @Log2
    set price(val:number){
        if(val > 0){
            this._price = val;
        }
    }
    constructor(t:string,p:number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price * (1 + tax);
    }
}
const p1 = new Product('book',12);
const p2 = new Product('Book 2',29);
const Autobind = (_:any,__:string | symbol | number,descriptor:PropertyDescriptor)=>{
    const originalMethod = descriptor.value;
    const adjDescriptor:PropertyDescriptor={
        configurable:true,
        enumerable:false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}
class Printer{
    message = 'This works!';
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}
const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click',p.showMessage);


interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[]
    }
}
const registeredValidators:ValidatorConfig = {};
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}
const validate =(obj:any)=>{
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) return true;
    let isValid = true;
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch (validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && !!obj[prop];
                    break;
            }
        }
    }
    return isValid;
}
class Course{
    @Required
    title:string;
    @PositiveNumber
    price:number;
    constructor(t:string,p:number) {
        this.title = t;
        this.price = p;
    }
}
const courseForm =document.querySelector('form')!;
courseForm.addEventListener('submit',e=>{
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title,price);

    if(!validate(createCourse)){
        alert('Invalid input!!');
        return;
    }
    console.log(createCourse);
})