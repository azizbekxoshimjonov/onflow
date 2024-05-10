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
        var navList = document.querySelector('.nav__list');
        var navLits = document.querySelector('.nav__lits')
        var navLits2 = document.querySelector('.nav__lits2')
        var navLits3 = document.querySelector('.nav__lits3')
        var navLits4 = document.querySelector('.nav__lits4')
        var navLits5 = document.querySelector('.nav__lits5')
        if (window.scrollY > 0) {
            navList.style.position = 'fixed';
            navList.style.top = '0';
            navList.style.backgroundColor = 'transparent';
            navLits.style.color = 'red';
            navLits2.style.color = 'red';
            navLits3.style.color = 'red';
            navLits4.style.color = 'red';
            navLits5.style.color = 'red';
        } else {
            navList.style.position = 'static';
            navList.style.backgroundColor = 'transparent';
            navLits.style.color = '#333';
            navLits2.style.color = '#333';
            navLits3.style.color = '#333';
            navLits4.style.color = '#333';
            navLits5.style.color = '#333';
        }
    });
    
    

    

    