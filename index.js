const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const year = document.getElementById('year');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');

const translations = {
    es: {
        pageTitle: 'David Lopez | Portafolio',
        metaDescription: 'Portafolio de David Lopez, estudiante de Ingeniería en Sistemas y desarrollador de software junior enfocado en desarrollo web, IA aplicada, APIs y automatización.',
        brandAria: 'Ir al inicio',
        navAria: 'Navegación principal',
        preferencesAria: 'Preferencias de idioma y apariencia',
        navAbout: 'Sobre mí',
        navExperience: 'Experiencia',
        navTech: 'Tecnologías',
        navProjects: 'Proyectos',
        navContact: 'Contacto',
        menuOpen: 'Abrir menú',
        menuClose: 'Cerrar menú',
        languageToOther: 'Cambiar idioma a inglés',
        themeToLight: 'Cambiar a modo claro',
        themeToDark: 'Cambiar a modo oscuro',
        heroRole: 'Estudiante de Ingeniería en Sistemas · Desarrollador de Software Junior',
        heroDescription: 'Desarrollo software y experiencias web con interés en inteligencia artificial aplicada, automatización, APIs y datos. Me gusta convertir problemas reales en productos funcionales, iterar sobre ellos y aprender construyendo.',
        viewProjects: 'Ver proyectos ↘',
        quickInfoAria: 'Información rápida',
        location: 'Monterrey, México',
        focusMeta: 'Software · IA · Web',
        profileSummaryAria: 'Resumen profesional',
        terminalFile: 'perfil.json',
        codeNameKey: 'nombre',
        codeRoleKey: 'rol',
        codeRoleValue: 'Desarrollador de Software Junior',
        codeFocusKey: 'enfoque',
        codeFocusSoftware: 'Desarrollo de Software',
        codeFocusAI: 'IA Aplicada',
        codeFocusApi: 'APIs y Automatización',
        codeLearningKey: 'aprendiendo',
        aboutIndex: '01 / SOBRE MÍ',
        aboutHeading: '< Construyendo una base técnica amplia />',
        aboutP1: 'Soy estudiante de Ingeniería en Sistemas en la <strong>Facultad de Ingeniería Mecánica y Eléctrica de la UANL</strong>. Mi formación combina programación, bases de datos, redes, soporte de TI y desarrollo de soluciones que integran servicios externos e inteligencia artificial.',
        aboutP2: 'Mi objetivo profesional es seguir creciendo como desarrollador de software, fortaleciendo backend, arquitectura de aplicaciones e IA aplicada sin perder el enfoque en interfaces claras y productos útiles.',
        focusSoftwareTitle: 'Desarrollo de software',
        focusSoftwareText: 'Aplicaciones web, lógica de negocio, integración de APIs y solución de problemas.',
        focusAiTitle: 'IA aplicada',
        focusAiText: 'Prototipos con modelos neuronales, visión por computadora y servicios de IA multimodal.',
        focusSupportTitle: 'Infraestructura y soporte',
        focusSupportText: 'Diagnóstico técnico, seguimiento de incidencias, hardware y continuidad operativa.',
        experienceIndex: '02 / EXPERIENCIA',
        experienceHeading: '< Experiencia profesional />',
        itRole: 'Analista de Soporte para TI',
        itDescription: 'Diagnóstico técnico y validación física de hardware en equipos corporativos, soporte de primer nivel, gestión y seguimiento de incidencias mediante tickets y apoyo en consultas SQL para la atención de requerimientos.',
        customerRole: 'Ejecutivo de Servicio al Cliente',
        customerDescription: 'Atención y seguimiento de solicitudes de clientes, resolución de incidencias dentro de procesos establecidos y desarrollo de habilidades de comunicación, análisis y manejo de situaciones bajo presión.',
        tagFollowUp: 'Seguimiento',
        tagCommunication: 'Comunicación',
        tagResolution: 'Resolución',
        techHeading: '< Tecnologías y herramientas />',
        techLead: 'Tecnologías que he utilizado en proyectos académicos, personales y experiencia práctica.',
        stackLanguages: '01 · Lenguajes',
        stackAiData: '03 · IA & Datos',
        stackDataTools: '04 · Datos & Herramientas',
        projectsIndex: '04 / PROYECTOS',
        projectsHeading: '< Trabajo destacado />',
        projectsLead: 'Una selección de proyectos que muestran mejor mi evolución técnica actual.',
        calendarKicker: 'IA · APIs · PRODUCTO',
        calendarDescription: 'Aplicación web de agenda inteligente que transforma texto, imágenes y voz en propuestas de eventos revisables. Integra Gemini con Google Calendar mediante OAuth 2.0 + PKCE y mantiene al usuario en control antes de crear cada evento.',
        lsmKicker: 'APRENDIZAJE PROFUNDO · VISIÓN POR COMPUTADORA',
        lsmTitle: 'Traductor de Lengua de Señas Mexicana',
        lsmDescription: 'Proyecto académico de traducción en tiempo real mediante cámara web, con alcance enfocado en un abecedario básico y un conjunto de palabras comunes. Combina una red densa para señas estáticas y una LSTM para letras y palabras con movimiento, utilizando landmarks de mano y procesamiento de video.',
        binKicker: 'ALGORITMOS · OPTIMIZACIÓN',
        binDescription: 'Aplicación interactiva en navegador para explorar el problema de optimización Bin Packing, desarrollada sin framework y enfocada en manipulación del DOM, interacción visual y lógica algorítmica.',
        weatherDescription: 'Aplicación web para consultar información meteorológica mediante OpenWeatherMap, uno de mis primeros proyectos consumiendo una API externa desde JavaScript.',
        codeLink: 'Código ↗',
        allRepositories: 'Ver todos los repositorios ↗',
        contactIndex: '05 / CONTACTO',
        contactHeading: '¿Construimos algo?',
        contactText: 'Estoy interesado en seguir desarrollándome en proyectos de software, automatización e inteligencia artificial aplicada. Puedes conocer más de mi trabajo o contactarme desde estos enlaces.',
        backToTop: 'Volver arriba ↑',
        prompt: '~/portafolio',
        emailLabel: 'Correo ↗',
        supportTag: 'Soporte TI',
        customerSupportTag: 'Atención al Cliente'
    },
    en: {
        pageTitle: 'David Lopez | Portfolio',
        metaDescription: 'Portfolio of David Lopez, a Systems Engineering student and junior software developer focused on web development, applied AI, APIs, and automation.',
        brandAria: 'Go to home',
        navAria: 'Main navigation',
        preferencesAria: 'Language and appearance preferences',
        navAbout: 'About',
        navExperience: 'Experience',
        navTech: 'Technologies',
        navProjects: 'Projects',
        navContact: 'Contact',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        languageToOther: 'Switch language to Spanish',
        themeToLight: 'Switch to light mode',
        themeToDark: 'Switch to dark mode',
        heroRole: 'Systems Engineering Student · Junior Software Developer',
        heroDescription: 'I build software and web experiences with an interest in applied artificial intelligence, automation, APIs, and data. I enjoy turning real problems into functional products, iterating on them, and learning by building.',
        viewProjects: 'View projects ↘',
        quickInfoAria: 'Quick information',
        location: 'Monterrey, Mexico',
        focusMeta: 'Software · AI · Web',
        profileSummaryAria: 'Professional summary',
        terminalFile: 'profile.json',
        codeNameKey: 'name',
        codeRoleKey: 'role',
        codeRoleValue: 'Junior Software Developer',
        codeFocusKey: 'focus',
        codeFocusSoftware: 'Software Development',
        codeFocusAI: 'Applied AI',
        codeFocusApi: 'APIs & Automation',
        codeLearningKey: 'learning',
        aboutIndex: '01 / ABOUT ME',
        aboutHeading: '< Building a broad technical foundation />',
        aboutP1: 'I am a Systems Engineering student at the <strong>Faculty of Mechanical and Electrical Engineering at UANL</strong>. My background combines programming, databases, networking, IT support, and the development of solutions that integrate external services and artificial intelligence.',
        aboutP2: 'My professional goal is to keep growing as a software developer, strengthening my backend, application architecture, and applied AI skills while maintaining a focus on clear interfaces and useful products.',
        focusSoftwareTitle: 'Software development',
        focusSoftwareText: 'Web applications, business logic, API integration, and problem solving.',
        focusAiTitle: 'Applied AI',
        focusAiText: 'Prototypes with neural networks, computer vision, and multimodal AI services.',
        focusSupportTitle: 'Infrastructure & support',
        focusSupportText: 'Technical diagnostics, incident tracking, hardware, and operational continuity.',
        experienceIndex: '02 / EXPERIENCE',
        experienceHeading: '< Professional experience />',
        itRole: 'IT Support Analyst',
        itDescription: 'Technical diagnostics and physical hardware validation for corporate computers, first-level support, ticket-based incident management and follow-up, and support with SQL queries to address technical requests.',
        customerRole: 'Customer Service Representative',
        customerDescription: 'Assisted and followed up on customer requests, resolved issues within established processes, and developed communication, analytical, and high-pressure problem-solving skills.',
        tagFollowUp: 'Follow-up',
        tagCommunication: 'Communication',
        tagResolution: 'Resolution',
        techHeading: '< Technologies & tools />',
        techLead: 'Technologies I have used across academic projects, personal work, and practical experience.',
        stackLanguages: '01 · Languages',
        stackAiData: '03 · AI & Data',
        stackDataTools: '04 · Data & Tools',
        projectsIndex: '04 / PROJECTS',
        projectsHeading: '< Featured work />',
        projectsLead: 'A selection of projects that best represent my current technical growth.',
        calendarKicker: 'AI · APIs · PRODUCT',
        calendarDescription: 'An intelligent calendar web application that turns text, images, and voice into reviewable event proposals. It integrates Gemini with Google Calendar through OAuth 2.0 + PKCE and keeps the user in control before each event is created.',
        lsmKicker: 'DEEP LEARNING · COMPUTER VISION',
        lsmTitle: 'Mexican Sign Language Translator',
        lsmDescription: 'An academic real-time translation project using a webcam, with a scope focused on a basic alphabet and a set of common words. It combines a dense neural network for static signs with an LSTM for letters and words that involve movement, using hand landmarks and video processing.',
        binKicker: 'ALGORITHMS · OPTIMIZATION',
        binDescription: 'An interactive browser application for exploring the Bin Packing optimization problem, built without a framework and focused on DOM manipulation, visual interaction, and algorithmic logic.',
        weatherDescription: 'A web application for checking weather information through OpenWeatherMap, one of my early projects consuming an external API directly from JavaScript.',
        codeLink: 'Code ↗',
        allRepositories: 'View all repositories ↗',
        contactIndex: '05 / CONTACT',
        contactHeading: 'Want to build something?',
        contactText: 'I am interested in continuing to grow through software, automation, and applied artificial intelligence projects. You can learn more about my work or get in touch through the links below.',
        backToTop: 'Back to top ↑',
        prompt: '~/portfolio',
        emailLabel: 'Email ↗',
        supportTag: 'IT Support',
        customerSupportTag: 'Customer Support'
    }
};

let currentLanguage = 'es';
let currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

function readPreference(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (_) {
        return fallback;
    }
}

function savePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (_) {}
}

function getText(key) {
    return translations[currentLanguage]?.[key] ?? translations.es[key] ?? key;
}

function refreshControlLabels() {
    if (languageToggle) {
        languageToggle.setAttribute('aria-checked', String(currentLanguage === 'en'));
        languageToggle.setAttribute('aria-label', getText('languageToOther'));
        languageToggle.title = getText('languageToOther');
    }

    if (themeToggle) {
        const isLight = currentTheme === 'light';
        themeToggle.setAttribute('aria-checked', String(isLight));
        const themeLabel = isLight ? getText('themeToDark') : getText('themeToLight');
        themeToggle.setAttribute('aria-label', themeLabel);
        themeToggle.title = themeLabel;
    }

    if (menuToggle) {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-label', isOpen ? getText('menuClose') : getText('menuOpen'));
    }
}

function applyLanguage(language, persist = true) {
    currentLanguage = language === 'en' ? 'en' : 'es';
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[currentLanguage][key] !== undefined) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const key = element.dataset.i18nHtml;
        if (translations[currentLanguage][key] !== undefined) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const key = element.dataset.i18nAria;
        if (translations[currentLanguage][key] !== undefined) {
            element.setAttribute('aria-label', translations[currentLanguage][key]);
        }
    });

    const prompt = document.querySelector('.prompt');
    if (prompt) prompt.textContent = getText('prompt');

    const terminalFile = document.querySelector('.terminal-topbar > span');
    if (terminalFile) terminalFile.textContent = getText('terminalFile');

    const emailLink = document.querySelector('.contact-links a[href^="mailto:"]');
    if (emailLink) emailLink.textContent = getText('emailLabel');

    const timelineItems = document.querySelectorAll('.timeline-item');
    const firstSupportTag = timelineItems[0]?.querySelector('.tag-row span:first-child');
    const customerSupportTag = timelineItems[1]?.querySelector('.tag-row span:first-child');
    if (firstSupportTag) firstSupportTag.textContent = getText('supportTag');
    if (customerSupportTag) customerSupportTag.textContent = getText('customerSupportTag');

    document.title = getText('pageTitle');
    if (descriptionMeta) descriptionMeta.content = getText('metaDescription');

    if (persist) savePreference('portfolio-language', currentLanguage);
    refreshControlLabels();
}

function applyTheme(theme, persist = true) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = currentTheme;

    if (themeColorMeta) {
        themeColorMeta.content = currentTheme === 'light' ? '#f4f4f1' : '#050505';
    }

    if (themeToggle) {
        const themeThumb = themeToggle.querySelector('.switch-thumb');
        themeToggle.style.width = '58px';
        if (themeThumb) {
            themeThumb.style.width = '25px';
            themeThumb.style.transform = currentTheme === 'light' ? 'translateX(0)' : 'translateX(27px)';
        }
    }

    if (persist) savePreference('portfolio-theme', currentTheme);
    refreshControlLabels();
}

if (year) {
    year.textContent = new Date().getFullYear();
}

currentLanguage = readPreference('portfolio-language', 'es') === 'en' ? 'en' : 'es';
applyLanguage(currentLanguage, false);
applyTheme(currentTheme, false);

if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        applyLanguage(currentLanguage === 'es' ? 'en' : 'es');
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

function setMenu(open) {
    if (!menuToggle || !menu) return;

    menuToggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    refreshControlLabels();
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
