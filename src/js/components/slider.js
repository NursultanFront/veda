import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay, Grid]);

// Слайдер здесь

const heroSliderSpeed = 1500;

const mainSlider = new Swiper(".main-slider", {
  slidesPerView: 1,
  speed: heroSliderSpeed,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  pagination: {
    el: ".main-slider-pag",
    clickable: true,
  },
});

const aboutBtns = document.querySelectorAll(".about__round");
const aboutContent = document.querySelectorAll(".about__box");

if (aboutBtns.length !== 0 && aboutContent.length !== 0) {
  // Инициализация слайдера: первый элемент активный, остальные скрыты
  for (let i = 1; i < aboutContent.length; i++) {
    aboutContent[i].style.display = "none";
  }

  aboutBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Скрыть все элементы контента
      aboutContent.forEach((content) => {
        content.style.display = "none";
      });

      // Деактивировать все кнопки
      aboutBtns.forEach((b) => {
        b.classList.remove("round--active");
      });

      // Показать соответствующий элемент контента
      aboutContent[index].style.display = "flex";

      // Активировать текущую кнопку
      btn.classList.add("round--active");
    });
  });
}

const companySlider = new Swiper(".company__right", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".company-next",
    prevEl: ".company-prev",
  },
});

const objectSlider = new Swiper(".object__slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".object-next",
    prevEl: ".object-prev",
  },
  pagination: {
    el: ".object-slider-pag",
    clickable: true,
  },
});

const gallerySlider = new Swiper(".gallery__wrapper", {
  slidesPerView: 3,
  grid: {
    fill: "row",
    rows: 1,
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".object-next",
    prevEl: ".object-prev",
  },
  pagination: {
    el: ".gallery-slider-pag",
    clickable: true,
  },

  breakpoints: {
    768: {
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
});
