// Enhanced functionality for Shaheed Thakur Ji Pathak Welfare Society website
console.log("Welcome to Shaheed Thakur Ji Pathak Welfare Society");

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src') || img.src;
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
});

// Handle image loading errors
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.opacity = '1';
        e.target.onerror = null;
    }
}, true);

// Gallery functionality
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('image-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${this.src}" alt="${this.alt}">
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    });
});

// Contact form validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you soon!');
        this.reset();
    });
}

// Add active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
