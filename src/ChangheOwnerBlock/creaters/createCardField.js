export const createCardField = () => {
  const field = document.createElement("input");

  field.type = "text";
  field.id = "new-owner-address";
  field.classList.add("card__new-owner-address");

  return field;
};
