function add(a = 2,b = 2){
    console.log(arguments);
    return a+b;
}
console.log(add(1));

//rest parameter
function sum(a,b,...numbers){
    console.log(numbers);
}
sum(1,3,4,5,565,2,2434,34,1);