// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
const arry= ['🍌', '🍓', '🍇', '🍓'];
let result = replace(arry,'🍌','🍇');
function replace(arry,from,to){
    return arry.map(val => val === from ? to : val);
};
console.log('q1',result);
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const ary = [ '🍌', '🥝', '🍇', '🥝' ]
result=cnt(ary,'🥝');
function cnt(arry,element){   
    //filter방식
    return arry.filter((val)=> val === element).length;
    //reduce방식
    // return arry.reduce((cnt,value)=>{
    //     if(value === element){
    //         cnt++
    //     }
    //     return cnt;
    // },0);
}
console.log('q2',result);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const array1=['🍌', '🥝', '🍇'];
const array2=['🍌', '🍓', '🍇', '🍓','🍇','🍌', '🍓', '🍇', '🍓','🍇','🥝'];
result=convert(array1,array2);
function convert(arry,arry2){
    return arry.filter(arry => arry2.includes(arry));
};
console.log('q3',result);
