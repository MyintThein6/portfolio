
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    // Simple mobile navigation toggle (requires styling for the hidden menu)
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
    });

    // Optional: Implement simple scroll-to-section logic for smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});