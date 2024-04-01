function navSlide() {
    const nav = document.querySelector(".navbar");
     const menu = document.querySelector(".nav-links");
     const burger = document.querySelector(".burger");

     burger.addEventListener("click", () => {

        menu.classList.toggle("nav-active");
     });
    }

    navSlide();

     