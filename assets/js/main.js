/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000, // Reduced from 2000 to 1000 ms
  delay: 100,     // Reduced from 200 to 100 ms
  // reset: true
});

sr.reveal('.home__data, .about__img');
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 200
});
sr.reveal('.home__social-icon, .work__title', {
  interval: 100
});
sr.reveal('.skills__data, .work__img, .contact__input', {
  interval: 100
});

// Reveal the skills categories more quickly
sr.reveal('.skills__category', {
  interval: 50 // Lower interval -> faster sequence
});

// Reveal the headings a bit sooner
sr.reveal('.skills__heading', {
  delay: 300  // Reduced from 500
});

// Reveal each skill button faster
sr.reveal('.skill__button', {
  interval: 30, // Faster stagger
  delay: 400    // Reduced from 600
});

ScrollReveal().reveal('.experience__item', {
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});

/*===== VIDEO VOLUME CONTROL (20%) =====*/
document.addEventListener('DOMContentLoaded', () => {
  const gokartVideo = document.getElementById('gokartVideo');
  if (gokartVideo) {
    gokartVideo.addEventListener('play', () => {
      gokartVideo.volume = 0.2; // 20% volume
    });
  }

// Revealing the certifications section items
sr.reveal('.certifications__item', {
  interval: 100 // Reveals each certification item sequentially with a small delay
});

});

