import { removeConnectButton } from "./Buttons/connectButton";
import { addDeployButton } from "./Buttons/deployButton";
import { setAccountName } from "./htmlSetters";

async function connect(state) {
  state.contract = new state.web3.eth.Contract(state.deployData.abi);

  state.currentAccount = (await state.web3.eth.getAccounts())[0];

  if (state.currentAccount === undefined) {
    throw new Error("Account not found");
  }

  setAccountName(state, state.currentAccount);
}

async function refreshAccount(state) {
  const newAddress = (await state.web3.eth.getAccounts())[0];

  if (state.currentAccount === undefined) {
    throw new Error("currentAccount not found");
  }

  if (state.currentAccount !== newAddress) {
    setAccountName(state, newAddress);
  }
}

export async function connectAccount(state) {
  await connect(state);

  const id = setInterval(() => refreshAccount(state), 500);

  removeConnectButton(state.html);

  addDeployButton(state);
}
