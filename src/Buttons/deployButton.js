import {
  blockButton,
  createButton,
  removeButton,
  unblockButton,
} from "./standardButtonsManipulations";
import { deploy } from "../deployContract";

export const addDeployButton = (state) => {
  const deployButton = createDeployButton();

  deployButton.onclick = async () => {
    try {
      blockButton(deployButton);
      await deploy(state);
    } catch (e) {
      unblockButton(deployButton);
      console.log(e.message);
    }
  };

  appendDeployButton(state.html, deployButton);
};

function appendDeployButton(html, button) {
  html.deployButton = button;

  html.header.append(button);
}

export const removeDeployButton = (html) => {
  removeButton(html.deployButton);

  delete html.deployButton;
};

function createDeployButton() {
  return createButton("Deploy contract", "connect-block__deploy-button");
}
