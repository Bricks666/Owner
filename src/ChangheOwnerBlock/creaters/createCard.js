import { createCardHeader } from "./createCardHeader";
import { createCardForm } from "./createCardForm";

export const createCard = () => {
  const card = document.createElement("div");

  card.append(createCardHeader(), createCardForm());

  card.classList.add("card");

  return card;
};
