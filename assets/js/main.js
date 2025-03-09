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
        } else {
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

// Global ScrollReveal calls (not inside DOMContentLoaded yet)
sr.reveal('.home__data, .about__img');
sr.reveal('.about__subtitle, .about__text, .skills__img', {
  delay: 200
});
sr.reveal('.home__social-icon, .work__title', {
  interval: 100
});
sr.reveal('.skills__data, .work__img, .contact__input', {
  interval: 100
});

// Add a dedicated reveal just for the home image
sr.reveal('.home__img', {
  origin: 'top',
  distance: '60px',
  duration: 1500,  // Slightly longer for a smoother effect
  delay: 300,      // Starts after the text reveals
  opacity: 0,      // Ensures a nice fade from 0 to 1
  easing: 'ease-in-out',
  // reset: false,  // If you only want it once
});
// Reveal the skills categories more quickly
sr.reveal('.skills__category', {
  interval: 50
});

// Reveal the headings a bit sooner
sr.reveal('.skills__heading', {
  delay: 300
});

// Reveal each skill button faster
sr.reveal('.skill__button', {
  interval: 30,
  delay: 400
});

// Reveal the experience items
sr.reveal('.experience__item', {
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});

/*===== VIDEO VOLUME CONTROL (20%) & Additional Reveals =====*/
document.addEventListener('DOMContentLoaded', () => {
  // Adjust volume once the DOM is ready
  const gokartVideo = document.getElementById('gokartVideo');
  if (gokartVideo) {
    gokartVideo.addEventListener('play', () => {
      gokartVideo.volume = 0.2; // 20% volume
    });
  }

  // Reveal the certifications section items
  sr.reveal('.certifications__item', {
    interval: 100
  });

  // NEW: Reveal the "From This / To This" elements
  sr.reveal('.transformation__heading, .transformation__arrow, .transformation__img, .transformation__video-container', {
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });
});
