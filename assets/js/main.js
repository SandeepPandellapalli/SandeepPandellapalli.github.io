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
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon, .work__title' ,{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Revealing the skills section categories
sr.reveal('.skills__category', {
    interval: 100 // Small interval for sequential reveal of each category
});

// Revealing the headings within each category with no additional delay
sr.reveal('.skills__heading', {
    delay: 500 // Slightly later than the category itself
});

// Revealing each skill within the categories with a stagger to follow the headings closely
sr.reveal('.skill__button', {
    interval: 50, // Stagger each button to follow quickly after the heading
    delay: 600 // Starts revealing skills shortly after the heading is shown
});


document.querySelectorAll('.skill__button, .experience__link').forEach(item => {
    item.addEventListener('mouseover', function() {
        const skillType = this.dataset.subskill || this.dataset.experience;
        highlightConnections(skillType);
    });
    item.addEventListener('mouseout', function() {
        clearHighlights();
    });
});

function highlightConnections(skillType) {
    // Logic to highlight connected items
    document.querySelectorAll(`[data-skill="${skillType}"]`).forEach(el => {
        el.classList.add('active');
    });
}

function clearHighlights() {
    document.querySelectorAll('.active').forEach(el => {
        el.classList.remove('active');
    });
}

