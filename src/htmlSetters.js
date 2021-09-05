import { html } from "./Elements";

export const setCurrentOwner = (data, name) => {
  html.currentOwner.querySelector(".card__owner-address").innerHTML = name;

  data.currentOwner = name;
};

export const setAccountName = (data, name) => {
  html.accountName.querySelector(".connect-block__current-address").innerHTML =
    name;
  data.account = name;
};
