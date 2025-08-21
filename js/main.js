const btnOpenMenu = document.querySelector(".header__btn-open");
const btnMenuClose = document.querySelector(".btn-close");
const menu = document.querySelector(".menu");
const linkMenu = document.querySelectorAll(".menu__list-item");

btnOpenMenu.addEventListener("click", function () {
  menu.classList.add("active");
});

btnMenuClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

linkMenu.forEach((item) => {
  item.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});



const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });