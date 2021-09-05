import Web3 from "./web3.min";
import { data } from "./data";
import { html } from "./Elements";
import { addConnectButton } from "./connectButton";

window.addEventListener("load", () => {
  if (data.web3 === undefined) {
    data.web3 = initialWeb3();
  }

  addConnectButton(data, html);
});

function initialWeb3() {
  if (typeof window.web3 === "undefined") {
    alert("Metamask not found");

    return new Web3(new Web3.providers.HttpProvider("localhost:8545"));
  }

  return new Web3(window.web3.currentProvider);
}

async function changeOwner(data) {
  const newAddress = html.changeOwnerField.value;
  html.changeOwnerField.value = "";

  console.log(data.currentOwner, newAddress, data.currentOwner === newAddress);

  if (newAddress === data.currentOwner) {
    alert("Нельзя сменить адрес на свой");
    return;
  }

  if (data.web3.utils.isAddress(newAddress) === false) {
    throw new TypeError("Введен некорректный адрес");
  }

  await data.contract.methods
    .changeOwner(newAddress)
    .send({ from: data.account });
}

html.changeOwnerButton.addEventListener(
  "click",
  async () => await changeOwner(data)
);
