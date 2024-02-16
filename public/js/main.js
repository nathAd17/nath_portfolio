document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const darkToggle = document.querySelector("#dark-toggle");
    const html = document.querySelector("html");

    darkToggle.addEventListener("change", function () {
        if (darkToggle.checked) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('[data-collapse-toggle="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
