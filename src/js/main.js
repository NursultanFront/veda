import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

import collapseShow from "./components/collapse";
import noUiSlider from "nouislider";
import Choices from "choices.js";
import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
  collapseShow();

  const rangeSliderMass = document.getElementById("range-slider-mass");
  const rangeSliderLength = document.getElementById("range-slider-length");
  const rangeSliderVolume = document.getElementById("range-slider-volume");
  const rangeSliderPrice = document.getElementById("range-slider-price");

  const massValueFrom = document.querySelector(".mass-from");
  const massValueTo = document.querySelector(".mass-to");

  const lengthValueFrom = document.querySelector(".length-from");
  const lengthValueTo = document.querySelector(".length-to");

  const volumeValueFrom = document.querySelector(".volume-from");
  const volumeValueTo = document.querySelector(".volume-to");

  const priceValueFrom = document.querySelector(".price-from");
  const priceValueTo = document.querySelector(".price-to");

  let sliderMass, sliderLength, sliderVolume, sliderPrice;

  if (rangeSliderMass) {
    sliderMass = noUiSlider.create(rangeSliderMass, {
      start: [0, 90],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });

    sliderMass.on("update", function (values) {
      massValueFrom.textContent = Math.round(values[0]);
      massValueTo.textContent = Math.round(values[1]);
    });
  }

  if (rangeSliderLength) {
    sliderLength = noUiSlider.create(rangeSliderLength, {
      start: [0, 90],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });

    sliderLength.on("update", function (values) {
      lengthValueFrom.textContent = Math.round(values[0]);
      lengthValueTo.textContent = Math.round(values[1]);
    });
  }

  if (rangeSliderVolume) {
    sliderVolume = noUiSlider.create(rangeSliderVolume, {
      start: [0, 90],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });

    sliderVolume.on("update", function (values) {
      volumeValueFrom.textContent = Math.round(values[0]);
      volumeValueTo.textContent = Math.round(values[1]);
    });
  }

  if (rangeSliderPrice) {
    sliderPrice = noUiSlider.create(rangeSliderPrice, {
      start: [0, 90],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });

    sliderPrice.on("update", function (values) {
      priceValueFrom.textContent = Math.round(values[0]);
      priceValueTo.textContent = Math.round(values[1]);
    });
  }

  const resetButton = document.querySelector(".reset-filter");
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      if (sliderMass) {
        sliderMass.set([0, 90]);
      }
      if (sliderLength) {
        sliderLength.set([0, 90]);
      }
      if (sliderVolume) {
        sliderVolume.set([0, 90]);
      }
      if (sliderPrice) {
        sliderPrice.set([0, 90]);
      }
    });
  }

  const select = document.querySelector(".js-choice");
  if (select) {
    const choices = new Choices(select, {
      searchEnabled: false,
    });
  }

  const heroSliderSpeed = 1500;

  const btn = document.querySelector(".slider-next");
  console.log(btn);

  // Слайдер здесь

  const mainSlider = new Swiper(".main-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: "slider-next",
      prevEl: "slider-prev",
    },
    // pagination: {
    //   el: ".hero__pag",
    //   type: "bullets",
    //   clickable: true,
    // },
    // on: {
    //   init: function () {
    //     const paginationBullets = document.querySelectorAll(
    //       ".hero__pag .swiper-pagination-bullet"
    //     );

    //     paginationBullets.forEach((el) => {
    //       el.innerHTML = `<span class="hero__bar"></span>`;
    //     });
    //   },
    // },
  });

  console.log(mainSlider);
});
