import {
  blockButton,
  createButton,
  removeButton,
  unblockButton,
} from "./standardButtonsManipulations";
import { connectAccount } from "../connect";

export const removeConnectButton = (html) => {
  removeButton(html.connectButton);

  delete html.connectButton;
};

export const addConnectButton = (state) => {
  const connectButton = createConnectButton();

  connectButton.addEventListener("click", async () => {
    try {
      blockButton(connectButton);
      await connectAccount(state);
    } catch (e) {
      unblockButton(connectButton);
      console.log(e.message);
    }
  });

  appendConnectButton(state.html, connectButton);
};

function appendConnectButton(html, button) {
  html.header.append(button);

  html.connectButton = button;
}

function createConnectButton() {
  return createButton("Connect to account", "connect-block__connect-button");
}
