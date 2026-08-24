const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

function setMenu(open) {
    if (!menuToggle || !menu) return;

    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
}

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setMenu(!isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) setMenu(false);
    });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('visible'));
}

if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const currentId = entry.target.id;
            navLinks.forEach((link) => {
                const target = link.getAttribute('href')?.replace('#', '');
                link.classList.toggle('active', target === currentId);
            });
        });
    }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach((section) => sectionObserver.observe(section));
}
