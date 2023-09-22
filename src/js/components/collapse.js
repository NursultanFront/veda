const buttons = document.querySelectorAll(".aside-card__button");
const holders = document.querySelectorAll(".aside-card__holder");

if (buttons && buttons.length !== 0) {
  buttons.forEach((item, index) => {
    item.addEventListener("click", function () {
      const holder = holders[index];
      if (holder.classList.contains("aside-card__holder--collapsed")) {
        holder.classList.remove("aside-card__holder--collapsed");
        item.classList.add("aside-card__button--wrap");
      } else {
        holder.classList.add("aside-card__holder--collapsed");
        item.classList.remove("aside-card__button--wrap");
      }
    });
  });
}

const containers = document.querySelectorAll(".aside-card__holder");

if (containers && containers.length !== 0) {
  containers.forEach((container) => {
    const buttons = container.querySelectorAll(".aside-card__text");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        if (button.classList.contains("aside-card__text--active")) {
          button.classList.remove("aside-card__text--active");
        } else {
          button.classList.add("aside-card__text--active");
        }
      });
    });
  });
}
