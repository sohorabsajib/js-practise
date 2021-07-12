const toTop = document.querySelector(".to-top");

window.addEventListener('scroll',() =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('xyz');
    }
    else{
        toTop.classList.remove('xyz');
    }
})