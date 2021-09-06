import { createCard } from "./creaters/createCard";
import { changeOwner } from "../changeOwner";

export const addCard = (state) => {
  const card = createCard();

  state.html.currentOwner = card.querySelector(".card__owner");
  state.html.changeOwnerField = card.querySelector(".card__new-owner-address");
  state.html.changeOwnerButton = card.querySelector(".card__change-owner");

  state.html.changeOwnerButton.addEventListener("click", async (evt) => {
    evt.preventDefault();
    try {
      await changeOwner(state);
    } catch (e) {
      console.log(e.message);
    }
  });

  state.html.main.append(card);
};
