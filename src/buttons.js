export const createButton = (text, className) => {
  const button = document.createElement("button");

  button.type = "submit";

  button.innerHTML = text;

  button.classList.add(className ?? "");

  return button;
};

export const removeButton = (button) => {
  button.remove();
};
