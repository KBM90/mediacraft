// ===================================
// MediaCraft - Interactive Functionality
// ===================================

// === Initialization ===
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initBookingForm();
    initMobileMenu();
    initLanguageDropdown();
});

// === Language System ===
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-voiceover': 'Voice-Over',
        'nav-booking': 'Book Now',
        'hero-line1': 'Digital Solutions.',
        'hero-line2': 'Creative Storytelling.',
        'hero-line3': 'Real Impact.',
        'hero-subtitle': 'We craft impactful websites, engaging social media content, high-quality photography, and professional voice-over services that tell your story and connect you with your audience.',
        'hero-cta-start': 'Start Your Project',
        'hero-cta-view': 'View Our Work',
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive digital solutions to elevate your brand',
        'service1-title': 'Web Design & Development',
        'service1-desc': 'Custom, responsive websites that captivate your audience and drive conversions. From landing pages to full e-commerce solutions.',
        'service1-feat1': 'Responsive Design',
        'service1-feat2': 'SEO Optimized',
        'service1-feat3': 'Fast Performance',
        'service1-feat4': 'Custom Solutions',
        'service2-title': 'Social Media Content',
        'service2-desc': 'Engaging content that builds your brand presence and connects with your target audience across all social platforms.',
        'service2-feat1': 'Content Strategy',
        'service2-feat2': 'Visual Design',
        'service2-feat3': 'Copywriting',
        'service2-feat4': 'Brand Consistency',
        'service3-title': 'Professional Photography',
        'service3-desc': 'High-quality photography that showcases your products, services, and brand story in the best light.',
        'service3-feat1': 'Product Photography',
        'service3-feat2': 'Brand Photography',
        'service3-feat3': 'Event Coverage',
        'service3-feat4': 'Professional Editing',
        'service4-title': 'Voice-Over Services',
        'service4-desc': 'Professional voice-over talent for commercials, explainer videos, podcasts, and multimedia projects.',
        'service4-feat1': 'Multiple Languages',
        'service4-feat2': 'Studio Quality',
        'service4-feat3': 'Fast Turnaround',
        'service4-feat4': 'Script Consultation',
        'portfolio-title': 'Our Portfolio',
        'portfolio-subtitle': 'Explore our recent web design projects',
        'voiceover-title': 'Voice-Over Showcase',
        'voiceover-subtitle': 'Listen to our professional voice-over work',
        'booking-title': 'Book a Service',
        'booking-subtitle': "Let's bring your vision to life",
        'form-services-label': 'Services Needed *',
        'form-category-label': 'Business Category *',
        'form-category-placeholder': 'Select your business category',
        'form-phone-label': 'Phone Number *',
        'form-submit': 'Send to WhatsApp',
        'info1-title': 'Quick Response',
        'info1-text': "We'll get back to you within 24 hours",
        'info2-title': 'Free Consultation',
        'info2-text': 'Discuss your project with our experts',
        'info3-title': 'Tailored Solutions',
        'info3-text': 'Custom strategies for your business',
        'footer-tagline': 'Digital solutions. Creative storytelling. Real impact.'
    },
    fr: {
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-voiceover': 'Voix-Off',
        'nav-booking': 'Réserver',
        'hero-line1': 'Solutions Numériques.',
        'hero-line2': 'Narration Créative.',
        'hero-line3': 'Impact Réel.',
        'hero-subtitle': 'Nous créons des sites web percutants, du contenu engageant pour les réseaux sociaux, de la photographie de haute qualité et des services de voix-off professionnels qui racontent votre histoire et vous connectent à votre audience.',
        'hero-cta-start': 'Démarrer Votre Projet',
        'hero-cta-view': 'Voir Nos Réalisations',
        'services-title': 'Nos Services',
        'services-subtitle': 'Solutions numériques complètes pour élever votre marque',
        'service1-title': 'Conception & Développement Web',
        'service1-desc': 'Sites web personnalisés et réactifs qui captivent votre audience et génèrent des conversions. Des pages de destination aux solutions e-commerce complètes.',
        'service1-feat1': 'Design Réactif',
        'service1-feat2': 'Optimisé SEO',
        'service1-feat3': 'Performance Rapide',
        'service1-feat4': 'Solutions Personnalisées',
        'service2-title': 'Contenu Réseaux Sociaux',
        'service2-desc': 'Contenu engageant qui renforce la présence de votre marque et connecte avec votre audience cible sur toutes les plateformes sociales.',
        'service2-feat1': 'Stratégie de Contenu',
        'service2-feat2': 'Design Visuel',
        'service2-feat3': 'Rédaction',
        'service2-feat4': 'Cohérence de Marque',
        'service3-title': 'Photographie Professionnelle',
        'service3-desc': 'Photographie de haute qualité qui met en valeur vos produits, services et histoire de marque sous le meilleur jour.',
        'service3-feat1': 'Photographie de Produits',
        'service3-feat2': 'Photographie de Marque',
        'service3-feat3': 'Couverture Événementielle',
        'service3-feat4': 'Retouche Professionnelle',
        'service4-title': 'Services de Voix-Off',
        'service4-desc': 'Talents de voix-off professionnels pour publicités, vidéos explicatives, podcasts et projets multimédias.',
        'service4-feat1': 'Plusieurs Langues',
        'service4-feat2': 'Qualité Studio',
        'service4-feat3': 'Livraison Rapide',
        'service4-feat4': 'Consultation de Script',
        'portfolio-title': 'Notre Portfolio',
        'portfolio-subtitle': 'Découvrez nos récents projets de conception web',
        'voiceover-title': 'Vitrine Voix-Off',
        'voiceover-subtitle': 'Écoutez notre travail professionnel de voix-off',
        'booking-title': 'Réserver un Service',
        'booking-subtitle': 'Donnons vie à votre vision',
        'form-services-label': 'Services Requis *',
        'form-category-label': 'Catégorie d\'Entreprise *',
        'form-category-placeholder': 'Sélectionnez votre catégorie d\'entreprise',
        'form-phone-label': 'Numéro de Téléphone *',
        'form-submit': 'Envoyer sur WhatsApp',
        'info1-title': 'Réponse Rapide',
        'info1-text': 'Nous vous répondrons dans les 24 heures',
        'info2-title': 'Consultation Gratuite',
        'info2-text': 'Discutez de votre projet avec nos experts',
        'info3-title': 'Solutions Sur Mesure',
        'info3-text': 'Stratégies personnalisées pour votre entreprise',
        'footer-tagline': 'Solutions numériques. Narration créative. Impact réel.'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-services': 'الخدمات',
        'nav-portfolio': 'معرض الأعمال',
        'nav-voiceover': 'التعليق الصوتي',
        'nav-booking': 'احجز الآن',
        'hero-line1': 'حلول رقمية.',
        'hero-line2': 'سرد قصصي إبداعي.',
        'hero-line3': 'تأثير حقيقي.',
        'hero-subtitle': 'نصنع مواقع ويب مؤثرة، ومحتوى جذاب لوسائل التواصل الاجتماعي، وتصوير فوتوغرافي عالي الجودة، وخدمات تعليق صوتي احترافية تروي قصتك وتربطك بجمهورك.',
        'hero-cta-start': 'ابدأ مشروعك',
        'hero-cta-view': 'شاهد أعمالنا',
        'services-title': 'خدماتنا',
        'services-subtitle': 'حلول رقمية شاملة لرفع مستوى علامتك التجارية',
        'service1-title': 'تصميم وتطوير المواقع',
        'service1-desc': 'مواقع ويب مخصصة ومتجاوبة تجذب جمهورك وتحقق التحويلات. من الصفحات المقصودة إلى حلول التجارة الإلكترونية الكاملة.',
        'service1-feat1': 'تصميم متجاوب',
        'service1-feat2': 'محسّن لمحركات البحث',
        'service1-feat3': 'أداء سريع',
        'service1-feat4': 'حلول مخصصة',
        'service2-title': 'محتوى وسائل التواصل',
        'service2-desc': 'محتوى جذاب يبني حضور علامتك التجارية ويتواصل مع جمهورك المستهدف عبر جميع المنصات الاجتماعية.',
        'service2-feat1': 'استراتيجية المحتوى',
        'service2-feat2': 'التصميم البصري',
        'service2-feat3': 'كتابة النصوص',
        'service2-feat4': 'اتساق العلامة التجارية',
        'service3-title': 'التصوير الفوتوغرافي الاحترافي',
        'service3-desc': 'تصوير فوتوغرافي عالي الجودة يعرض منتجاتك وخدماتك وقصة علامتك التجارية بأفضل صورة.',
        'service3-feat1': 'تصوير المنتجات',
        'service3-feat2': 'تصوير العلامة التجارية',
        'service3-feat3': 'تغطية الفعاليات',
        'service3-feat4': 'تحرير احترافي',
        'service4-title': 'خدمات التعليق الصوتي',
        'service4-desc': 'مواهب تعليق صوتي احترافية للإعلانات التجارية ومقاطع الفيديو التوضيحية والبودكاست والمشاريع متعددة الوسائط.',
        'service4-feat1': 'لغات متعددة',
        'service4-feat2': 'جودة الاستوديو',
        'service4-feat3': 'تسليم سريع',
        'service4-feat4': 'استشارة النصوص',
        'portfolio-title': 'معرض أعمالنا',
        'portfolio-subtitle': 'استكشف مشاريع تصميم الويب الأخيرة',
        'voiceover-title': 'عرض التعليق الصوتي',
        'voiceover-subtitle': 'استمع إلى أعمالنا الاحترافية في التعليق الصوتي',
        'booking-title': 'احجز خدمة',
        'booking-subtitle': 'لنحقق رؤيتك معاً',
        'form-services-label': 'الخدمات المطلوبة *',
        'form-category-label': 'فئة العمل *',
        'form-category-placeholder': 'اختر فئة عملك',
        'form-phone-label': 'رقم الهاتف *',
        'form-submit': 'إرسال عبر واتساب',
        'info1-title': 'استجابة سريعة',
        'info1-text': 'سنرد عليك خلال 24 ساعة',
        'info2-title': 'استشارة مجانية',
        'info2-text': 'ناقش مشروعك مع خبرائنا',
        'info3-title': 'حلول مخصصة',
        'info3-text': 'استراتيجيات مخصصة لعملك',
        'footer-tagline': 'حلول رقمية. سرد قصصي إبداعي. تأثير حقيقي.'
    },
    es: {
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-portfolio': 'Portafolio',
        'nav-voiceover': 'Locución',
        'nav-booking': 'Reservar',
        'hero-line1': 'Soluciones Digitales.',
        'hero-line2': 'Narrativa Creativa.',
        'hero-line3': 'Impacto Real.',
        'hero-subtitle': 'Creamos sitios web impactantes, contenido atractivo para redes sociales, fotografía de alta calidad y servicios profesionales de locución que cuentan tu historia y te conectan con tu audiencia.',
        'hero-cta-start': 'Inicia Tu Proyecto',
        'hero-cta-view': 'Ver Nuestro Trabajo',
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones digitales integrales para elevar tu marca',
        'service1-title': 'Diseño y Desarrollo Web',
        'service1-desc': 'Sitios web personalizados y responsivos que cautivan a tu audiencia e impulsan conversiones. Desde páginas de destino hasta soluciones completas de comercio electrónico.',
        'service1-feat1': 'Diseño Responsivo',
        'service1-feat2': 'Optimizado SEO',
        'service1-feat3': 'Rendimiento Rápido',
        'service1-feat4': 'Soluciones Personalizadas',
        'service2-title': 'Contenido Redes Sociales',
        'service2-desc': 'Contenido atractivo que construye la presencia de tu marca y conecta con tu audiencia objetivo en todas las plataformas sociales.',
        'service2-feat1': 'Estrategia de Contenido',
        'service2-feat2': 'Diseño Visual',
        'service2-feat3': 'Redacción',
        'service2-feat4': 'Consistencia de Marca',
        'service3-title': 'Fotografía Profesional',
        'service3-desc': 'Fotografía de alta calidad que muestra tus productos, servicios e historia de marca bajo la mejor luz.',
        'service3-feat1': 'Fotografía de Productos',
        'service3-feat2': 'Fotografía de Marca',
        'service3-feat3': 'Cobertura de Eventos',
        'service3-feat4': 'Edición Profesional',
        'service4-title': 'Servicios de Locución',
        'service4-desc': 'Talento profesional de locución para comerciales, videos explicativos, podcasts y proyectos multimedia.',
        'service4-feat1': 'Múltiples Idiomas',
        'service4-feat2': 'Calidad de Estudio',
        'service4-feat3': 'Entrega Rápida',
        'service4-feat4': 'Consultoría de Guiones',
        'portfolio-title': 'Nuestro Portafolio',
        'portfolio-subtitle': 'Explora nuestros proyectos recientes de diseño web',
        'voiceover-title': 'Muestra de Locución',
        'voiceover-subtitle': 'Escucha nuestro trabajo profesional de locución',
        'booking-title': 'Reservar un Servicio',
        'booking-subtitle': 'Hagamos realidad tu visión',
        'form-services-label': 'Servicios Necesarios *',
        'form-category-label': 'Categoría de Negocio *',
        'form-category-placeholder': 'Selecciona tu categoría de negocio',
        'form-phone-label': 'Número de Teléfono *',
        'form-submit': 'Enviar a WhatsApp',
        'info1-title': 'Respuesta Rápida',
        'info1-text': 'Te responderemos en 24 horas',
        'info2-title': 'Consulta Gratuita',
        'info2-text': 'Discute tu proyecto con nuestros expertos',
        'info3-title': 'Soluciones Personalizadas',
        'info3-text': 'Estrategias personalizadas para tu negocio',
        'footer-tagline': 'Soluciones digitales. Narrativa creativa. Impacto real.'
    },
    de: {
        'nav-home': 'Startseite',
        'nav-services': 'Dienstleistungen',
        'nav-portfolio': 'Portfolio',
        'nav-voiceover': 'Sprachaufnahme',
        'nav-booking': 'Jetzt Buchen',
        'hero-line1': 'Digitale Lösungen.',
        'hero-line2': 'Kreatives Storytelling.',
        'hero-line3': 'Echte Wirkung.',
        'hero-subtitle': 'Wir erstellen wirkungsvolle Websites, ansprechende Social-Media-Inhalte, hochwertige Fotografie und professionelle Sprachaufnahmen, die Ihre Geschichte erzählen und Sie mit Ihrem Publikum verbinden.',
        'hero-cta-start': 'Projekt Starten',
        'hero-cta-view': 'Unsere Arbeiten',
        'services-title': 'Unsere Dienstleistungen',
        'services-subtitle': 'Umfassende digitale Lösungen zur Stärkung Ihrer Marke',
        'service1-title': 'Webdesign & Entwicklung',
        'service1-desc': 'Maßgeschneiderte, responsive Websites, die Ihr Publikum fesseln und Conversions fördern. Von Landing Pages bis zu vollständigen E-Commerce-Lösungen.',
        'service1-feat1': 'Responsives Design',
        'service1-feat2': 'SEO-Optimiert',
        'service1-feat3': 'Schnelle Leistung',
        'service1-feat4': 'Individuelle Lösungen',
        'service2-title': 'Social Media Inhalte',
        'service2-desc': 'Ansprechende Inhalte, die Ihre Markenpräsenz aufbauen und mit Ihrer Zielgruppe auf allen sozialen Plattformen verbinden.',
        'service2-feat1': 'Content-Strategie',
        'service2-feat2': 'Visuelles Design',
        'service2-feat3': 'Texterstellung',
        'service2-feat4': 'Markenkonsistenz',
        'service3-title': 'Professionelle Fotografie',
        'service3-desc': 'Hochwertige Fotografie, die Ihre Produkte, Dienstleistungen und Markengeschichte im besten Licht präsentiert.',
        'service3-feat1': 'Produktfotografie',
        'service3-feat2': 'Markenfotografie',
        'service3-feat3': 'Event-Berichterstattung',
        'service3-feat4': 'Professionelle Bearbeitung',
        'service4-title': 'Sprachaufnahme-Services',
        'service4-desc': 'Professionelle Sprecher für Werbespots, Erklärvideos, Podcasts und Multimedia-Projekte.',
        'service4-feat1': 'Mehrere Sprachen',
        'service4-feat2': 'Studioqualität',
        'service4-feat3': 'Schnelle Lieferung',
        'service4-feat4': 'Skript-Beratung',
        'portfolio-title': 'Unser Portfolio',
        'portfolio-subtitle': 'Entdecken Sie unsere neuesten Webdesign-Projekte',
        'voiceover-title': 'Sprachaufnahme-Showcase',
        'voiceover-subtitle': 'Hören Sie unsere professionellen Sprachaufnahmen',
        'booking-title': 'Service Buchen',
        'booking-subtitle': 'Lassen Sie uns Ihre Vision verwirklichen',
        'form-services-label': 'Benötigte Services *',
        'form-category-label': 'Geschäftskategorie *',
        'form-category-placeholder': 'Wählen Sie Ihre Geschäftskategorie',
        'form-phone-label': 'Telefonnummer *',
        'form-submit': 'An WhatsApp Senden',
        'info1-title': 'Schnelle Antwort',
        'info1-text': 'Wir melden uns innerhalb von 24 Stunden',
        'info2-title': 'Kostenlose Beratung',
        'info2-text': 'Besprechen Sie Ihr Projekt mit unseren Experten',
        'info3-title': 'Maßgeschneiderte Lösungen',
        'info3-text': 'Individuelle Strategien für Ihr Unternehmen',
        'footer-tagline': 'Digitale Lösungen. Kreatives Storytelling. Echte Wirkung.'
    }
};

const languageNames = {
    en: { flag: '🇬🇧', short: 'EN', full: 'English' },
    fr: { flag: '🇫🇷', short: 'FR', full: 'Français' },
    ar: { flag: '🇸🇦', short: 'AR', full: 'العربية' },
    es: { flag: '🇪🇸', short: 'ES', full: 'Español' },
    de: { flag: '🇩🇪', short: 'DE', full: 'Deutsch' }
};

let currentLanguage = 'en';

function initLanguage() {
    // Load saved language or detect browser language
    const savedLang = localStorage.getItem('mediacraft-language');
    const browserLang = navigator.language.split('-')[0];

    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else if (translations[browserLang]) {
        currentLanguage = browserLang;
    }

    setLanguage(currentLanguage);
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    localStorage.setItem('mediacraft-language', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language button
    const currentLangBtn = document.getElementById('currentLang');
    if (currentLangBtn) {
        currentLangBtn.textContent = `${languageNames[lang].flag} ${languageNames[lang].short}`;
    }

    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

function initLanguageDropdown() {
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const langOptions = document.querySelectorAll('.lang-option');

    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('active');
        }
    });

    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageMenu.classList.remove('active');
        });
    });
}


// === Navigation ===
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only handle hash links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update active link
                    updateActiveLink(link);

                    // Close mobile menu if open
                    const navLinksContainer = document.getElementById('navLinks');
                    const menuToggle = document.getElementById('menuToggle');
                    if (navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        menuToggle.classList.remove('active');
                    }
                }
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active section
        updateActiveSectionOnScroll();

        lastScroll = currentScroll;
    });
}

function updateActiveLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (correspondingLink) {
                updateActiveLink(correspondingLink);
            }
        }
    });
}

// === Mobile Menu ===
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// === Scroll Animations ===
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// === Booking Form ===
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Validate form
        if (validateForm()) {
            // Get form data
            const formData = getFormData();

            // Create WhatsApp message
            const message = createWhatsAppMessage(formData);

            // Open WhatsApp
            const whatsappNumber = '212634864854';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="btn-text">Opening WhatsApp...</span>';

            // Open WhatsApp in new tab
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');

                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span class="btn-text">Send to WhatsApp</span><span class="btn-icon">💬</span>';

                // Reset form
                form.reset();

                // Show success message
                showSuccessMessage();
            }, 500);
        }
    });
}

function validateForm() {
    let isValid = true;

    // Validate services
    const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
    if (serviceCheckboxes.length === 0) {
        showError('servicesError', 'Please select at least one service');
        isValid = false;
    }

    // Validate business category
    const businessCategory = document.getElementById('businessCategory');
    if (!businessCategory.value) {
        showError('categoryError', 'Please select your business category');
        isValid = false;
    }

    // Validate phone number
    const phoneNumber = document.getElementById('phoneNumber');
    const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

    if (!phoneNumber.value) {
        showError('phoneError', 'Please enter your phone number');
        isValid = false;
    } else if (!phonePattern.test(phoneNumber.value.replace(/\s/g, ''))) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }

    return isValid;
}

function getFormData() {
    const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
    const services = Array.from(serviceCheckboxes).map(cb => cb.value);
    const businessCategory = document.getElementById('businessCategory').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    return {
        services,
        businessCategory,
        phoneNumber
    };
}

function createWhatsAppMessage(data) {
    let message = '🎨 *New Service Booking - MediaCraft*\n\n';

    message += '📋 *Services Requested:*\n';
    data.services.forEach(service => {
        message += `✓ ${service}\n`;
    });

    message += `\n🏢 *Business Category:* ${data.businessCategory}\n`;
    message += `📞 *Phone Number:* ${data.phoneNumber}\n\n`;
    message += 'Please contact me to discuss the project details. Thank you!';

    return message;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = '#ef4444';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function showSuccessMessage() {
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.innerHTML = '✓ WhatsApp opened successfully!';

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === Portfolio Iframe Error Handling ===
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('.portfolio-iframe');

    iframes.forEach(iframe => {
        iframe.addEventListener('error', () => {
            console.log('Iframe failed to load:', iframe.src);
            // Could add fallback image here if needed
        });
    });
});

// === Smooth Scroll Polyfill for older browsers ===
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}
