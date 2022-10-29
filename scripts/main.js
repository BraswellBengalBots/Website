const hamburger = document.querySelector("nav .hamburger");
const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach((element) => {
  console.log(window.location.pathname);
  element.children[0].getAttribute("href") === window.location.pathname
    ? element.classList.add("active")
    : element.classList.remove("active");
});

let isNavActive = false;
const navAnimation = [
  {
    offset: 0,
    transform: "translateX(0)",
    color: "rgba(227, 226, 223, 0)",
  },
  {
    offset: 0.5,
    color: "rgba(227, 226, 223, 0)",
  },
  {
    offset: 1,
    transform: "translateX(-100vw)",
    color: "rgba(227, 226, 223, 1)",
  },
];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  if (isNavActive) {
    for (let i = navLinks.length - 1; i >= 0; i--) {
      navLinks[i].animate(navAnimation, {
        duration: 300,
        delay: i * 100,
        iterations: 1,
        direction: "reverse",
        fill: "forwards",
      });
    }
  } else {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].animate(navAnimation, {
        duration: 300,
        delay: i * 100,
        iterations: 1,
        direction: "normal",
        fill: "forwards",
      });
    }
  }

  isNavActive = !isNavActive;
});
