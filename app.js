const $burger = document.querySelector(".burger");
//console.log($burger);
const $navLinksContainer = document.querySelector(".nav-links-container");
const $navlinks = document.querySelectorAll(".nav-links-container li");

$burger.onclick = () =>{
    $navLinksContainer.classList.toggle("nav-clicked"); //adding a new class token if not present and removing it if present`QFA 
    $burger.classList.toggle("burger-clicked");
    
    $navlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        }
        else{
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 5 +
            0.5}s `;    
        }
    });
};

 