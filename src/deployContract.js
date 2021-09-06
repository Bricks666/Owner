/*
Нужно разбить функцию на большее количество частей,
Потому что так получается, что слишком много всего делает
*/

import { removeDeployButton } from "./Buttons/deployButton";
import { addCard } from "./ChangheOwnerBlock/addCard";
import { setCurrentOwner } from "./htmlSetters";

async function deployContract(state) {
  const deploy = state.contract.deploy({ data: state.deployData.bytecode });

  const contract = await deploy
    .send({ from: state.currentAccount })
    .on("receipt", (receipt) => {
      addCard(state);
      setCurrentOwner(state, receipt.from);
    });

  return contract;
}

function addListener(state) {
  state.contract.events
    .OwnerSet()
    .on("data", ({ returnValues }) =>
      setCurrentOwner(state, returnValues.newOwner)
    )
    .on("error", console.log);
}

export async function deploy(state) {
  state.contract = await deployContract(state);

  removeDeployButton(state.html);

  addListener(state);
}
