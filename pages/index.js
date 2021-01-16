const stuck = document.querySelector(".stuck");
const logo = document.querySelector(".header__logo");
const text = document.querySelector(".header__text");
const menu = document.querySelector(".menu__container");
const menuOpenBtn = document.querySelector(".menu__btn-open");
const menuCloseBtn = document.querySelector(".menu__btn-close");

const arrowBtnList = Array.from(document.querySelectorAll(".menu__arrow"));

window.addEventListener("load", function (event) {
  console.log("All resources finished loading!");
  logo.classList.add("header__logo_show");

  text.classList.add("header__text_show");

  if (pageYOffset >= 800) {
    stuck.classList.add("stuck_show");
  }
});

function headerShow() {
  if (pageYOffset >= 800) {
    stuck.classList.add("stuck_show");
  } else stuck.classList.remove("stuck_show");
}
window.addEventListener("scroll", headerShow);

menuOpenBtn.addEventListener("click", function () {
  menu.classList.add("menu__container_type_show");
  window.removeEventListener("scroll", headerShow);
  menuCloseBtn.classList.add("menu__btn-close_type_show");
});

menuCloseBtn.addEventListener("click", function () {
  menuCloseBtn.classList.remove("menu__btn-close_type_show");
  menu.classList.remove("menu__container_type_show");
  window.addEventListener("scroll", headerShow);
});

arrowBtnList.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    const item = btn.closest(".menu__item");
    const subList = item.querySelector(".menu__sub-list");
    if (subList.classList.contains("menu__sub-list_type_show")) {
      subList.classList.remove("menu__sub-list_type_show");
      btn.textContent = "▼";
    } else {
      subList.classList.add("menu__sub-list_type_show");
      btn.textContent = "▲";
    }
  });
});

let slider = $(".header__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  fade: true,
  speed: 500,
  cssEase: "linear",
});

slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  $(".header__slider").slick("slickPause");
});
