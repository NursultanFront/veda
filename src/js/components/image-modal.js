import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay, Grid]);

let modalSwiper;

function openModalWithSwiper() {
  modalSwiper = new Swiper(".modal .modal-content", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const gallery = document.querySelector(".gallery");

if (gallery) {
  const slides = gallery.querySelectorAll(".swiper-slide");
  const modal = document.getElementById("modal-slider"); // Изменили id
  const closeModal = document.querySelector(".close"); // Используем класс .close

  if (slides.length !== 0) {
    slides.forEach((slide) => {
      slide.addEventListener("click", function () {
        const modalWrapper = document.querySelector(
          ".modal .modal-content .swiper-wrapper"
        );
        modalWrapper.innerHTML = "";

        slides.forEach((slide) => {
          const imgSrc = slide.querySelector("img").getAttribute("src");
          const swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide");

          const img = document.createElement("img");
          img.setAttribute("src", imgSrc);
          swiperSlide.appendChild(img);

          modalWrapper.appendChild(swiperSlide);
        });

        openModalWithSwiper();

        modal.style.display = "flex";
      });
    });
  }

  closeModal.addEventListener("click", function () {
    document.getElementById("modal-slider").style.display = "none"; // Изменили id
    if (modalSwiper) {
      modalSwiper.destroy();
    }
  });
}
