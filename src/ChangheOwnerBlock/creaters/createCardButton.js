export const createCardButton = () => {
  const button = document.createElement("button");

  button.type = "submit";
  button.innerHTML = "Сменить владельца";
  button.classList.add("card__change-owner");

  return button;
};
