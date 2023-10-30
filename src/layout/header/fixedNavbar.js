window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (scrollY >= 600) {
    navbar.classList.add("awake");
  } else if (scrollY >= 400) {
    navbar.classList.add("fixed");
    navbar.classList.remove("awake");
  } else if (scrollY >= 200) {
    navbar.classList.add("sleep");
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.remove("sleep");
  }
});
