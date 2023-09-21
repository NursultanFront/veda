// Находим все чекбоксы с классом form__checkbox
const checkboxes = document.querySelectorAll(".form__checkbox");

checkboxes.forEach((checkbox) => {
  // Находим ближайший родительский элемент с классом form__footer
  const formFooter = checkbox.closest(".form__footer");

  // В этом родительском элементе находим кнопку отправки
  const submitButton = formFooter.querySelector(".orange-button");

  // Находим элементы form__label и form__check, связанные с этим чекбоксом
  const formLabel = formFooter.querySelector(
    "label[for='" + checkbox.id + "']"
  );
  const formCheck = formFooter.querySelector(".form__check");

  // Функция для переключения чекбокса и класса form__check--active
  const toggleCheckbox = () => {
    checkbox.checked = !checkbox.checked;
    formCheck.classList.toggle("form__check--active", checkbox.checked);
  };

  // Функция для включения/отключения кнопки отправки
  const toggleButton = () => {
    if (checkbox.checked) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  };

  // Изначальное применение функции, чтобы установить правильное состояние кнопки при загрузке страницы
  toggleButton();

  // Добавляем слушатель событий к чекбоксу
  checkbox.addEventListener("change", toggleButton);

  // Добавляем слушатель событий к form__label и form__check
  if (formLabel) {
    formLabel.addEventListener("click", (event) => {
      event.preventDefault();
      toggleCheckbox();
      toggleButton();
    });
  }

  if (formCheck) {
    formCheck.addEventListener("click", () => {
      toggleCheckbox();
      toggleButton();
    });
  }
});
