import noUiSlider from "nouislider";

const slidersData = [
  {
    sliderClass: ".range-slider-mass",
    valueFrom: ".mass-from",
    valueTo: ".mass-to",
    maxValue: 63,
  },
  {
    sliderClass: ".range-slider-length",
    valueFrom: ".length-from",
    valueTo: ".length-to",
    maxValue: 100,
  },
  {
    sliderClass: ".range-slider-volume",
    valueFrom: ".volume-from",
    valueTo: ".volume-to",
    maxValue: 100,
  },
  {
    sliderClass: ".range-slider-price",
    valueFrom: ".price-from",
    valueTo: ".price-to",
    maxValue: 1000000,
  },
];

const sliderInstances = [];

slidersData.forEach((data) => {
  const sliderElements = document.querySelectorAll(data.sliderClass);
  const valueFromElements = document.querySelectorAll(data.valueFrom);
  const valueToElements = document.querySelectorAll(data.valueTo);

  sliderElements.forEach((sliderElement, index) => {
    if (sliderElement) {
      const slider = noUiSlider.create(sliderElement, {
        start: [0, data.maxValue * 0.9], // начинаем с 90% от максимального значения
        connect: true,
        range: {
          min: 0,
          max: data.maxValue,
        },
      });

      slider.on("update", function (values) {
        if (valueFromElements[index]) {
          valueFromElements[index].textContent = Math.round(values[0]);
        }
        if (valueToElements[index]) {
          valueToElements[index].textContent = Math.round(values[1]);
        }
      });

      sliderInstances.push(slider);
    }
  });
});

const resetButton = document.querySelectorAll(".reset-filter");
if (resetButton && resetButton.length !== 0) {
  resetButton.forEach((item) => {
    item.addEventListener("click", function () {
      sliderInstances.forEach((slider) => {
        slider.set([0, slider.options.range.max * 0.9]);
      });
    });
  });
}
