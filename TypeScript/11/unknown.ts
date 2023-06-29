let userInput:unknown;
let userName:string;

userInput=4;
userInput='max';
if(typeof userInput ==='string'){
    userName = userInput;
}

const generateError = (message:string,code:number):never=>{
    throw{message,code}
}
generateError('an error occurred!',500);

