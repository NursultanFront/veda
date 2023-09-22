import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay, Grid]);

let modalSwiper;

function openModalWithSwiper() {
  modalSwiper = new Swiper("#modal-slider .modal-content", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });
}

const gallery = document.querySelector(".gallery");

if (gallery) {
  const slides = gallery.querySelectorAll(".swiper-slide");
  const modal = document.getElementById("modal-slider");
  const closeModal = modal.querySelector("#close-image-modal"); // Изменим место поиска кнопки закрытия

  slides.forEach((slide) => {
    slide.addEventListener("click", function () {
      const modalWrapper = modal.querySelector(".swiper-wrapper");
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

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    if (modalSwiper) {
      modalSwiper.destroy();
    }
  });
}

const contactModal = document.getElementById("contact-modal"); // Используем правильный ID
const closeModalBtn = contactModal.querySelector(".close"); // Ищем кнопку закрытия внутри контактного модального окна
const contactButton = document.querySelectorAll(".modal-open__btn");

function openContactModal() {
  contactModal.style.display = "flex";
}

function closeContactModal() {
  contactModal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeContactModal);

contactButton.forEach((item) => {
  item.addEventListener("click", openContactModal);
});
