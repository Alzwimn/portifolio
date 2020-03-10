const aboutSection = document.querySelector("#about");


//check if element is visible in screen
let observer = new IntersectionObserver( (entrie) => {
    if (entrie[0].isIntersecting === true) {
        aboutSectionAnimation();
    }
}, { threshold: [0] });


    
//Functions
function aboutSectionAnimation(){
    const image = document.querySelector(".man");
    const title = document.querySelector(".title");
    const para = document.querySelector(".paragraph");

    image.classList.add("image-animation");
    title.classList.add("title-animation");
    para.classList.add("para-animation");  
}

const navSlide = () =>{
    const burger = document.querySelector(".s-burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li"); 

    burger.addEventListener("click", () => {
        nav.classList.toggle("links-active");

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinkFade ease-out forwards ${index / 7 + 1}s`;
            }
        });
        //Cross animation
        burger.classList.toggle("toggle");
    });
    
}


// Application function handles all that happens in the page
const applications = () => {
    observer.observe(aboutSection);
    navSlide();
}
applications();