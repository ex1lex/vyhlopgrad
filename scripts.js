const header = document.querySelector(".header__top-line");
window.addEventListener("scroll", () => {
  if (pageYOffset >= 800) {
    header.classList.add("header__top-line_show");
  } else header.classList.remove("header__top-line_show");
});
