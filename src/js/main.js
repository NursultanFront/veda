import "./_vendor";
import "./_functions";
import "./_components";

import Choices from "choices.js";

document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".js-choice");

  if (selects && selects.length > 0) {
    selects.forEach((selectElement) => {
      new Choices(selectElement, {
        searchEnabled: false,
      });
    });
  }

  const accordionLabel = document.querySelector(".accordion-label");
  const accordionContent = document.querySelector(".accordion-content");
  const accordionIcon = document.querySelector(".accordion-label__icon");

  accordionLabel.addEventListener("click", function () {
    if (
      accordionContent.style.display === "none" ||
      accordionContent.style.display === ""
    ) {
      accordionContent.style.display = "block";
      accordionIcon.classList.add("accordion-label__icon_up");
    } else {
      accordionContent.style.display = "none";
      accordionIcon.classList.remove("accordion-label__icon_up");
    }
  });
});
