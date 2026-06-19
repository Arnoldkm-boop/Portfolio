const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            // remove animation first
            entry.target.classList.remove("animate");

            // force browser to reset animation
            void entry.target.offsetWidth;

            // add animation again (restarts it)
            entry.target.classList.add("animate");
        }
    });
}, {
    threshold: 0.3 
});

boxes.forEach((box) => {
    observer.observe(box);
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});