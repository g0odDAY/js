// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
const input= ['🍌', '🍓', '🍇', '🍓'];
let result = replace(input);
function replace(arry){
   const replaced=Array.from(arry);
   for(i in replaced){
       if(replaced[i] === '🍓')
       replaced[i] === '🥝';
   }
   return replaced;
}
console.log('result:',result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// let cnt=0;
// for(let i =0;i<output.length;i++){
//     if(output[i]==='🍌'){
//         cnt++;
//     }
// } 
// console.log(cnt);
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
let arry=['🍌', '🥝', '🍇'];
let arry2=['🍌', '🍓', '🍇', '🍓','🍇'];
let arry3=[...new Set(arry2)];
let temp=[];
for(let i=0;i<arry3.length;i++){
    if(arry.includes(arry3[i]))
    temp.push(arry3[i]);
}
    console.log(temp);