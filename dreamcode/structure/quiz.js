// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
const input= ['🍌', '🍓', '🍇', '🍓'];
let result = replace(input,'🍓','🍇');
function replace(arry,from,to){
   const replaced=Array.from(arry);
   console.log('replaced',replaced);
   for(i in replaced){
       if(replaced[i] === from)
       replaced[i] = to;
   }
   return replaced;
}
console.log('result:',result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const ary = [ '🍌', '🥝', '🍇', '🥝' ]

let result2=cnt(ary,'🥝');

function cnt(arry,element){   
    let num=0;
    for(i in arry){
        if(arry[i] === element){
            num++;
        }
    } 
  return num;
}
console.log(result2);
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const arry=['🍌', '🥝', '🍇'];
const arry2=['🍌', '🍓', '🍇', '🍓','🍇','🍌', '🍓', '🍇', '🍓','🍇','🥝'];
let result3=convert(arry,arry2);
function convert(arry,arry2){
    let arryTemp=Array.from(new Set(arry2));
    const result=[];
    for(i in arryTemp){
        if(arry.includes(arryTemp[i]))
        result.push(arryTemp[i]);
    }
    return result;
};
console.log(result3);

// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];
result=arryAvg(nums);
/**
 * 
 * @param {*} arry 
 * @returns 
 */
function arryAvg(arry){
    return arry.filter((num)=> num>5)
               .reduce((sum, value, _, arry)=>sum+value/arry.length,0);  
}
console.log(result);