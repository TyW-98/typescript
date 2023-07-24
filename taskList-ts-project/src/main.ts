import "../styles/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import FullListTemplate from "./template/ListTemplate";

// Initialise application
const initApp = (): void => {
  const fullList = FullList.instance;
  const fullListTemplate = FullListTemplate.instance;

  const inputForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  inputForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    const inputField = document.getElementById("newItem") as HTMLInputElement;
    const newItemText: string = inputField.value.trim();

    if (!newItemText) {
      return;
    }

    const newItemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id + 1)
      : 1;

    const newItem = new ListItem(newItemId.toString(), newItemText);
    fullList.addItem(newItem);
    // Re-render after adding new item
    fullListTemplate.render(fullList);
  });

  const clearList = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  clearList.addEventListener("click", () => {
    fullList.clearList();
    fullListTemplate.clear();
  });

  fullList.load();
  fullListTemplate.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
