
/* Menu Responsivo */
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

/* HTML */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });    
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

        /* Remover menu ao clicar */
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');

    };

    /* scroll reveal */

    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.inicio-img, .servicos-container, portifolio-box, .contato form', { origin: 'top' });
    ScrollReveal().reveal('.home-content h1, .inicio-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .inicio-content', { origin: 'right' });