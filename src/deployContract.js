/*
Нужно разбить функцию на большее количество частей,
Потому что так получается, что слишком много всего делает
*/

import { removeButton } from "./buttons";
import { setCurrentOwner } from "./htmlSetters";

async function deployContract(data) {
  const deploy = data.contract.deploy({ data: data.dataForDeploy.bytecode });

  const contract = await deploy
    .send({ from: data.account })
    .on("receipt", (receipt) => setCurrentOwner(data, receipt.from));

  return contract;
}

export async function deploy(data, html) {
  data.contract = await deployContract(data);

  removeButton(html.deployButton);

  data.contract.events
    .OwnerSet()
    .on("data", ({ returnValues }) =>
      setCurrentOwner(data, returnValues.newOwner)
    )
    .on("error", console.log);
}
