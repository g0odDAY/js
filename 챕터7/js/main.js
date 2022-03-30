'use strict';
//초기화
let indicator=document.querySelectorAll('.indicator button');
let lightBox=document.querySelector('#lightbox');
let block=document.querySelector('#block');
//라이트박스표시
function lightBoxOpen(num){
    lightBox.setAttribute('class','active');
    block.setAttribute('class','active');
    changeImage(num);

    indicator[num-1].focus();
}
//라이트박스종료
function lightBoxClose(){
    lightBox.removeAttribute('class');
    block.removeAttribute('class');
}
//이미지전환표시함수
function changeImage(val){
    let imgs=document.querySelectorAll('figure > img');
    for(let i=0;i<imgs.length;i++){
        imgs[i].removeAttribute('class');
    }
    imgs[val-1].setAttribute('class','active');
}