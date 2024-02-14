window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const holdLoader = document.querySelector(".holdLoader");
    holdLoader.classList.add("loader--hidden");
  
    holdLoader.addEventListener("transitionend", () => {
        document.body.removeChild(holdLoader);
    });
  });
  