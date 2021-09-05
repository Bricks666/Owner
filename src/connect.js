import { removeConnectButton } from "./connectButton";
import { addDeployButton } from "./deployButton";
import { setAccountName } from "./htmlSetters";

async function connect(data) {
  data.contract = new data.web3.eth.Contract(data.dataForDeploy.abi);

  data.account = (await data.web3.eth.getAccounts())[0];

  if (data.account === undefined) {
    throw new Error("Account not found");
  }

  setAccountName(data, data.account);
}

async function refreshAccount(data, html) {
  const newAddress = (await data.web3.eth.getAccounts())[0];

  if (data.account === undefined) {
    throw new Error("Account not found");
  }

  if (data.account !== newAddress) {
    setAccountName(data, newAddress);
  }
}

export async function connectAccount(data, html) {
  await connect(data);

  const id = setInterval(() => refreshAccount(data, html), 500);

  removeConnectButton(html);

  addDeployButton(data, html);
}
