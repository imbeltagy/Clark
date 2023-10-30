// Add/Remove Active Class to Nav Links
const ActiveLink = () => {
  const links = Array.from(document.getElementsByClassName("nav-link"));

  links.forEach((link) => {
    const target = document.querySelector(link.getAttribute("data-target"));
    // If:  Target === null => return
    if (!target) return;
    // Else: If Target is in view => add("active"), Else: remove("active")
    if (scrollY > target.offsetTop - 100 && scrollY < target.offsetTop - 100 + target.offsetHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", ActiveLink);
window.addEventListener("load", ActiveLink);
