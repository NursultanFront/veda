const collapseShow = () => {
  const button = document.querySelector(".aside-card__button");
  const holder = document.querySelector(".aside-card__holder");

  if (button) {
    button.addEventListener("click", function () {
      if (holder.classList.contains("aside-card__holder--collapsed")) {
        holder.classList.remove("aside-card__holder--collapsed");
        button.classList.add("aside-card__button--wrap");
      } else {
        holder.classList.add("aside-card__holder--collapsed");
        button.classList.remove("aside-card__button--wrap");
      }
    });
  }
};

export default collapseShow;
