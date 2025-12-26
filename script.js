// ===================================
// MediaCraft - Interactive Functionality
// ===================================

// === Initialization ===
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initBookingForm();
    initMobileMenu();
});

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
            const whatsappNumber = '00212634864854';
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
