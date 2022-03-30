var wrapper=document.querySelector('.wrapper');
var page=document.querySelectorAll('.page');
var indicator = document.getElementById('indicator');
var indicator_li=indicator.querySelectorAll('li');
console.log(page);
var yDeg=0,
    indicator_num=1,
    indicator_length=page.length,
    w=page[0].offsetWidth,
    page_angle=0;
    console.log(w);
function init_page(){
    w=page[0].offsetWidth;

    //3d page 4면체 위치정의
    for(var i =0;i < page.length;i++){
        page[i].style.transform = 'rotateY('+page_angle+'deg)translateZ('+(w/2)+'px)';
        page_angle += 90;

    }
    //page wrapper 정면으로 초기화
    wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
    
}

function inti_indicator(){
    //인디케이터 표시
    for(var i=0;i<indicator_length;i++){
        indicator.innerHTML += '<li>'+(i+1)+'</li>';
    }
    indicator_li = indicator.querySelectorAll('li');
    change_page(indicator_num);
}
function change_page(inum){
    indicator_li[inum-1].setAttribute('class','active');
    yDeg = -90 * (inum-1);
    wrapper.style.transform = 'translateZ('+(-w/2)+'px) rotateY('+yDeg+'deg)';
    for(var i = 0;i<indicator_li.length;i++){
        indicator_li[i].removeAttribute('class');
    }
    indicator_li[inum-1].setAttribute('class','active');
}
init_page();
inti_indicator();
for(var i =0;i<indicator_li.length;i++){
    indicator_li[i].addEventListener('click',function(){
        indicator_num = parseInt(this.innerText);
        change_page(indicator_num);
    })
}