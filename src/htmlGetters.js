export const getNewAddress = (html) => {
  const newAddress = html.changeOwnerField.value;

  html.changeOwnerField.value = "";

  return newAddress;
};
