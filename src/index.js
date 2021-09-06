import Web3 from "./web3.min";
import { state } from "./state";
import { addConnectButton } from "./Buttons/connectButton";

window.addEventListener("load", () => {
  if (state.web3 === undefined) {
    state.web3 = initialWeb3();
  }

  addConnectButton(state);
});

function initialWeb3() {
  /* Лучше переписать, использую window.ethereum */

  if (typeof window.web3 === "undefined") {
    alert("Metamask not found");

    return new Web3(new Web3.providers.HttpProvider("localhost:8545"));
  }

  return new Web3(window.web3.currentProvider);
}
