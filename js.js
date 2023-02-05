let btn = document.querySelector('#btn');
let boady =document.querySelector('boady')
let icon=document.querySelector('.fa-solid fa-moon')
btn.onclick=function(){
    boady.classList.toggle('dark')
    if(boady.classList.contains('dark')){
        icon.setAtrbute('class', 'fa-solid fa-sun')
    }
    else{
        icon.setAtrbute('class', 'fa-solid fa-moon')
    }
}