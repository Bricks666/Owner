import { createButton } from "./buttons";
import { connectAccount } from "./connect";
import { removeButton } from "./buttons";

export const removeConnectButton = (html) => {
  removeButton(html.connectButton);
};

export const addConnectButton = (data, html) => {
  const connectButton = createConnectButton();

  connectButton.addEventListener(
    "click",
    async () => await connectAccount(data, html)
  );

  html.header.append(connectButton);

  html.connectButton = connectButton;
};

function createConnectButton() {
  return createButton("Connect to account", "connect-account");
}
