import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay, Grid]);

let modalSwiper;

function openModalWithSwiper() {
  modalSwiper = new Swiper(".modal-content", {
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
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.getElementById("close-image-modal");

  if (slides.length !== 0) {
    slides.forEach((slide) => {
      slide.addEventListener("click", function () {
        const modalWrapper = document.querySelector(
          ".modal-content .swiper-wrapper"
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
      });
    });
  }

  closeModal.addEventListener("click", function () {
    document.getElementById("image-modal").style.display = "none";
    if (modalSwiper) {
      modalSwiper.destroy();
    }
  });
}
