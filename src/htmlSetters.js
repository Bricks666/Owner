export const setCurrentOwner = (state, name) => {
  state.html.currentOwner.querySelector(".card__owner-address").innerHTML =
    name;

  state.currentOwner = name;
};

export const setAccountName = (state, name) => {
  state.html.accountName.querySelector(
    ".connect-block__current-address"
  ).innerHTML = name;
  state.currentAccount = name;
};
