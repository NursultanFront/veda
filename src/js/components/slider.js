import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay]);

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
