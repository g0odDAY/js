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
console.log(addapp(2,4,'as-text'))