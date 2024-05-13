function moveLeft() {
    const elBox__litle = document.querySelector('.box__litle');
    elBox__litle.style.transform = `translateX(32px)`; 
    
}
function moveLeft1(){
    const elBox__litle = document.querySelector('.box__litle');
    elBox__litle.style.transform = `translateX(232px)`; 
}
function moveLeft2(){
    const elBox__litle = document.querySelector('.box__litle');
    elBox__litle.style.transform = `translateX(430px)`; 
}
function moveLeft3(){
    const elBox__litle = document.querySelector('.box__litle');
    elBox__litle.style.transform = `translateX(605px)`; 
}
function moveLeft4(){
    const elBox__litle = document.querySelector('.box__litle');
    elBox__litle.style.transform = `translateX(800px)`; 
}
function moveLeft5(){
    const elBox__litle = document.querySelector('.box__litle');
    elBox__litle.style.transform = `translateX(995px)`; 
}
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    window.addEventListener('scroll', function() {
        var navLits = document.querySelector('header');
        if (window.scrollY > 0) {
            navLits.style.position = 'fixed';
            navLits.style.top = '0';
            navLits.style.left = '50%';
            navLits.style.transform = 'translateX(-50%)'; 
            navLits.style.backgroundColor = 'white';
           
        } else {
            navLits.style.position = 'static';
            navLits.style.left = 'auto'; 
            navLits.style.transform = 'none'; 
            navLits.style.backgroundColor = 'white';
           
        }
    });
    

    

    