export const createCardLabel = () => {
  const label = document.createElement("label");

  label.for = "new-owner-address";
  label.innerHTML = "Адрес нового владельца";
  label.classList.add("card__new-owner-label");

  return label;
};
