// Sticky Header Effect

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Scroll Animation

const fadeElements = document.querySelectorAll(
    ".services-preview, .programs-hero, .program-item, .card, .project-card, .about-grid, .price-card, .blog-card, .testimonial-image, .testimonial-text, .stat-card, .impact-section, .survey-intro"
);

const observer = new IntersectionObserver(
(entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},
{
    threshold:0.15
}
);

fadeElements.forEach(item=>{
    if(item.classList.contains('testimonial-image')){
        item.classList.add('slide-from-right');
    } else if(item.classList.contains('testimonial-text')){
        item.classList.add('reveal-text');
    } else {
        item.classList.add("fade-up");
    }
    observer.observe(item);
});

// Counter Animation

const counters = document.querySelectorAll(".stats-grid h2");

counters.forEach(counter=>{

    const updateCounter = () => {

        const target =
        parseInt(counter.innerText.replace(/\D/g,''));

        const current =
        parseInt(counter.getAttribute("data-count")) || 0;

        const increment =
        Math.ceil(target / 80);

        if(current < target){

            const next = current + increment;

            counter.setAttribute(
                "data-count",
                next
            );

            counter.innerText =
            next + "+";

            setTimeout(updateCounter,25);

        } else {

            counter.innerText =
            target + "+";
        }

    };

    updateCounter();

});

// Survey Stats Counter Animation

const statCounters = document.querySelectorAll(".stat-card h3");

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !entry.target.classList.contains('counted')){
            const counter = entry.target;
            counter.classList.add('counted');
            
            const targetText = counter.innerText;
            const targetNum = parseInt(targetText.replace(/\D/g,'')) || 0;
            const hasSymbol = targetText.includes('+') || targetText.includes('%');
            
            const animateCount = () => {
                const current = parseInt(counter.getAttribute("data-count")) || 0;
                const increment = Math.ceil(targetNum / 50);

                if(current < targetNum){
                    const next = current + increment;
                    counter.setAttribute("data-count", next);
                    counter.innerText = next + (hasSymbol ? (targetText.includes('%') ? '%' : '+') : '');
                    setTimeout(animateCount, 30);
                } else {
                    counter.innerText = targetNum + (hasSymbol ? (targetText.includes('%') ? '%' : '+') : '');
                }
            };
            
            animateCount();
        }
    });
}, { threshold: 0.5 });

statCounters.forEach(counter => statObserver.observe(counter));

const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('nav-open', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('nav-open');
        });
    });
}

