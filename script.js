const navHamburger = document.querySelector('.nav-hamburger');
const navlinks = document.querySelector('.nav-links');
let navbarToggler = false;

navHamburger.addEventListener('click',(event)=>{
    if(!navbarToggler){
        navlinks.classList.remove('navlinks-closed');
        navlinks.classList.add('navlinks-active');
        navbarToggler=true;
    }else{
        navlinks.classList.add('navlinks-closed');
        navlinks.classList.remove('navlinks-active');
        navbarToggler=false;
    }
})