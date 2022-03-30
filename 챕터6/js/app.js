'use strict';
let inp=document.forms['cal'];
let input=inp.getElementsByTagName('input');
let clsBtn=document.getElementsByClassName('clsBtn')[0];
let resultBtn=document.getElementsByClassName('resultBtn')[0];
console.log(inp);
console.log(input[16].value);
console.log(clsBtn);
console.log(resultBtn);
for(let i=0;i<input.length;i++){
    if(input[i].value != '=' && input[i].value != 'clear'){
        input[i].onclick = function(){
            console.log(this);
            calc(this.value);
        }
    }
}
resultBtn.onclick=function(){
    try{
      result();  
    }catch(err){
        let result=inp['result'];
        result.value="입력오류";
    }
    
}
clsBtn.onclick=function(){
    clear();
}
function result(){
    let result=document.forms['cal']['result'];
    let calc=eval(result.value);

    inp['result'].value=calc;
}
function clear(){
    inp['result'].value=0;
}
function calc(value){
    if(inp['result'].value == 0){
        inp['result'].value='';
    }
    inp['result'].value+=value;
}