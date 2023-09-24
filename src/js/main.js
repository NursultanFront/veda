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

  if (accordionLabel) {
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
  }

  const asideNav = document.querySelector(".vehicle__aside.aside-nav");
  const stickyPoint = 400; // например, после прокрутки на 200px

  if (asideNav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= stickyPoint) {
        asideNav.classList.add("sticky");
      } else {
        asideNav.classList.remove("sticky");
      }
    });
  }

  const sections = [
    document.querySelector("#descr"),
    document.querySelector("#char"),
    document.querySelector("#gallery"),
  ];

  const navItems = document.querySelectorAll(".aside-nav__item");

  const PADDING = 60;

  if (navItems && navItems.length !== 0) {
    window.addEventListener("scroll", function () {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const nextSection = sections[index + 1];
        const nextRect = nextSection
          ? nextSection.getBoundingClientRect()
          : null;

        if (
          rect.top <= PADDING &&
          (!nextRect || (nextRect && nextRect.top > PADDING))
        ) {
          navItems.forEach((item) =>
            item.classList.remove("aside-nav__item--active")
          );
          navItems[index].classList.add("aside-nav__item--active");
        }
      });
    });
  }
});
