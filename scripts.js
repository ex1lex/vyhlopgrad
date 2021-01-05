const header = document.querySelector(".header__top-line");
const logo = document.querySelector(".header__logo_type_vertical");
const text = document.querySelector(".header__text");

window.addEventListener("load", function (event) {
  console.log("All resources finished loading!");
  logo.classList.add("header__logo_show");

  text.classList.add("header__text_show");
});

window.addEventListener("scroll", () => {
  if (pageYOffset >= 800) {
    header.classList.add("header__top-line_show");
  } else header.classList.remove("header__top-line_show");
});
