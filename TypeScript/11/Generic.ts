// const names:Array<string>=[];
// const promise:Promise<string> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is done');
//
//     },3000)
// })


const merge = <T extends object, U extends  object>(objA: T, objB: U) => {
    return Object.assign<T,U>(objA, objB);
};
const mergedObj = merge<{name:string,hobbies:string[]},{age:number}>({name:'max',hobbies:['sports']},{age:30});
console.log(mergedObj.name)
interface Lengthy{
    length:number;
}
const cntAndPrint=<T extends Lengthy>(element:T):[T,string]=>{
    let descriptionText = 'got no value.';
    if(element.length===1){
        descriptionText = 'got 1 element.';
    }else if(element.length > 1){
        descriptionText = 'Got '+element.length+' elements';
    }
    return [element,descriptionText]
}
console.log(cntAndPrint(['hi there!','cooking']));

const extractAndConvert=<T extends  object,U extends keyof T>(obj:T,key:U)=>{
    return obj[key];
}
console.log(extractAndConvert({name:'maxmax'},'name'))

class DataStorage<T extends string | number | boolean>{
    private data:T[] = [];
    addItem(item:T){
        this.data.push(item);
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data];
    }
}
const textStorate = new DataStorage<string>();
textStorate.addItem('max');
textStorate.addItem('kyubok');
console.log(textStorate.getItems())
interface CourseGoal{
    title:string;
    description:string;
    completeUntil:Date;
}
