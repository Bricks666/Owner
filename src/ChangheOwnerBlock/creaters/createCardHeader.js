import { createCardAddress } from "./createCardAddress";

export const createCardHeader = () => {
  const header = document.createElement("h2");

  header.innerHTML = "Текущий владелец: ";
  header.append(createCardAddress());
  header.classList.add("card__owner");

  return header;
};
