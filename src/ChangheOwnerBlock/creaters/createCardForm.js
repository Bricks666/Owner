import { createCardButton } from "./createCardButton";
import { createCardLabel } from "./createCardLabel";
import { createCardField } from "./createCardField";

export const createCardForm = () => {
  const form = document.createElement("form");

  form.append(createCardLabel(), createCardField(), createCardButton());
  form.classList.add("card__form");

  return form;
};
