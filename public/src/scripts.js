// JavaScript for navigation, menu, scroll, and form

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Hide/Show navbar on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.classList.add('hide-nav');
        navbar.classList.remove('show-nav');
    } else {
        // Scrolling up
        navbar.classList.remove('hide-nav');
        navbar.classList.add('show-nav');
    }
    lastScrollTop = scrollTop;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1 && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) mobileMenu.classList.add('hidden');
        }
    });
});

// Logo click scrolls to top
document.querySelectorAll('img[alt="Budside Limited Logo"]').forEach(logo => {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(el => {
    observer.observe(el);
});

// Lazy-load all images for mobile performance
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        img.setAttribute('decoding', 'async');
        img.setAttribute('fetchpriority', 'low');
    });
});

//send us a message
const toggleBtn = document.getElementById('toggleForm');
  const form = document.getElementById('contactForm');
  const arrow = document.getElementById('arrow');

  toggleBtn.addEventListener('click', () => {
    if (form.style.maxHeight) {
      form.style.maxHeight = null;
    } else {
      form.style.maxHeight = form.scrollHeight + "px";
    }
    arrow.classList.toggle('rotate-180');
  });
