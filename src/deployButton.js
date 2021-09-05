import { createButton, removeButton } from "./buttons";
import { deploy } from "./deployContract";

export const addDeployButton = (data, html) => {
  const button = createDeployButton();

  button.onclick = async () => await deploy(data, html);

  html.deployButton = button;

  html.header.append(button);
};

export const removeDeployButton = (html) => {
  removeButton(html.deployButton);
};

function createDeployButton() {
  return createButton("Deploy contract", "deploy-contract");
}
