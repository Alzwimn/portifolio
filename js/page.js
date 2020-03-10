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


// Application function handles all that happens in the page
const applications = () => {
    observer.observe(aboutSection);
}
applications();