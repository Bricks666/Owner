import { getNewAddress } from "./htmlGetters";

export async function changeOwner(state) {
  const newAddress = getNewAddress(state.html);

  /* Нужно что то придумать, чтобы не реагировало на собственный адрес, который приходит при receipt'е */
  /*   if (state.currentAccount !== state.currentOwner) {
    alert("Вы не являетесь владельцем");
    return;
  } */

  if (newAddress === state.currentOwner) {
    alert("Нельзя сменить адрес на свой");
    return;
  }

  if (state.web3.utils.isAddress(newAddress) === false) {
    throw new TypeError("Введен некорректный адрес");
  }

  await state.contract.methods
    .changeOwner(newAddress)
    .send({ from: state.currentAccount });
}
