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
    ".card, .project-card, .about-grid, .price-card, .blog-card"
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
    item.classList.add("fade-up");
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