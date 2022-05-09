let array=new Array(2);
console.log(array);
array = Array.of(1,2,3,4,5);
console.log(array);
array = Array.from('dfdslfjklsdfjlksdf');
console.log(array);

let arry=[1,3,3,4,5,6];
arry.sort((a,b)=>a-b);
console.log('arry'+arry);
console.clear();
let lottos=[44, 1, 0, 0, 31, 25];
let filterLotto=lottos.filter(function(e){
    return e != 0;
} );
console.log('filter',filterLotto);