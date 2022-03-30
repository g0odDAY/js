let inp = $('form[name=cal]');
console.log(inp);
let input=inp.find('input');
console.log(input);
let clsBtn=$('.clsBtn');
console.log(clsBtn);
let resultBtn=$('.resultBtn');
console.log(resultBtn);
let result=inp.find('input[name=result]');
console.log(result);

$('input').click(function(){
    let input_value=$(this).val();
    console.log(input_value);
    if(input_value != '=' && input_value != 'clear'){
        calc(input_value);
    }
})
$('.clsBtn').click(function(){
    clear();
})
$('.resultBtn').click(function(){
    try{
        calcResult();
    }catch(err){
        result.val('입력오류');
    }
})
function clear(){
    result.val(0);
}
function calc(value){
    if(result.val() == 0){
        result.val('');
    }
    let val=result.val()+value;
    result.val(val);
}
function calcResult(){
    let calc =eval(result.val());
    console.log(calc);
    result.val(calc);
}