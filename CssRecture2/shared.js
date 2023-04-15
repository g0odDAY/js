let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanBtn = document.querySelectorAll('.plan button');
let toggleBtn = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
for(let i = 0;i<selectPlanBtn.length;i++){
    selectPlanBtn[i].addEventListener('click',()=>{
        modal.style.display='block';
        backdrop.style.display='block';

    })
}
backdrop.addEventListener('click',()=>{
    backdrop.style.display='none';
    modal.style.display='none';
    mobileNav.style.display='none';

})
toggleBtn.addEventListener('click',()=>{
    mobileNav.style.display='block';
    backdrop.style.display='block';
})
console.log(toggleBtn,mobileNav);