let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    return;
  }

  document.body.style.overflow = "";
});
