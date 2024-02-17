// mulai dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
});
// akhir dark mode

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