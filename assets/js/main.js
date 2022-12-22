//=====================Start Back to Top button============================//
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 200) { // Show backToTopButton
      backToTopButton.style.display = "block";
    }
  
  else { // Hide backToTopButton
      backToTopButton.style.display = "none";
    }
    
}

backToTopButton.addEventListener("click", BackToTop);


function BackToTop(){
  window.scroll(0, 0);
}


//=====================End Back to Top button============================//

//=============Start ScrollReveal --Scroll on move-- Credit to Julian Lloyd https://github.com/jlmakes/scrollreveal======//
window.sr = ScrollReveal();
sr.reveal(".navbar" , {
  duration: 2000,
  origin: "bottom"
});
sr.reveal(".move-from-left" , {
  duration: 2000,
  origin: "left",
  distance: "200px",
  viewFactor: 0.2
});
sr.reveal(".move-from-right" , {
  duration: 2000,
  origin: "right",
  distance: "200px",
  viewFactor: 0.2
});
sr.reveal(".move-from-top" , {
  duration: 2000,
  origin: "top",
  distance: "500px",
  viewFactor: 0.2
});
sr.reveal(".item-delay" , {
  duration: 2000,
  delay: 2000,
  origin: "top",
});
sr.reveal(".box" , {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
  viewFactor: 0.02
});
//=============End ScrollReveal --Scroll on move-- ======//