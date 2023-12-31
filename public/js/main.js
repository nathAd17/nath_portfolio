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
// gallery
var openmodal = document.querySelectorAll(".modal-open");
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener("click", function (event) {
        event.preventDefault();
        toggleModal();
    })
}
var closemodal = document.querySelectorAll(".modal-close");
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener("click", toggleModal);
}

function toggleModal() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("pointer-events-none");
    body.classList.toggle("modal-active");
}

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