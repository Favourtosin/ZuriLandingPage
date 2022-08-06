'use strict';
const btnFil = document.querySelector('.navbar');
btnFil.addEventListener('click', function(e){
    e.preventDefault();

       if (e.target.classList.contains('nav_link') ) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

btnFil.addEventListener('click', function(){
    const navLink = document.querySelectorAll('.nav_link');

    navLink.forEach(el => {
    el.classList.remove('navbar-active');
        el.addEventListener('click', function(){
       
    el.classList.add('navbar-active');
    console.log(el);
        })
        
    });
})








