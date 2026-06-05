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
    ".services-preview, .programs-hero, .program-item, .card, .project-card, .about-grid, .price-card, .blog-card, .testimonial-image, .testimonial-text"
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
