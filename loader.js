window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const holdLoader = document.querySelector("#preloader");
    holdLoader.classList.add("loader--hidden");
    
  
    holdLoader.addEventListener("transitionend", () => {
        document.body.removeChild(holdLoader);
        content.style.display = 'block';
        
    });
  });
  