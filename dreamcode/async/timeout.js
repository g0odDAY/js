function execute(){
    console.log('1');
    setTimeout(()=>{
        console.log('3초뒤에 출력');
    },3000);
    console.log(3);
}
execute();