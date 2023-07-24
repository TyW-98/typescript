import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class FullListTemplate implements DOMList {
  // Create only one instance of FullListTemplate across the whole application
  static instance: FullListTemplate = new FullListTemplate();

  ul: HTMLUListElement;

  // private constructor(pass in as parameters){Absolutely asigned it}
  private constructor() {
    this.ul = document.getElementById("listItem") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.map((itemObj) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const checkbox = document.createElement("input") as HTMLInputElement;
      checkbox.type = "checkbox";
      checkbox.id = itemObj.id;
      checkbox.checked = itemObj.checked;
      // Change status of checkbox when clicked
      checkbox.addEventListener("change", () => {
        itemObj.checked = !itemObj.checked;
        fullList.save();
      });
      li.append(checkbox);

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = itemObj.id;
      label.textContent = itemObj.item;
      li.append(label);

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      // Use even listener to list for mouseclick and remove item from list before re-rendering the whole list
      button.addEventListener("click", () => {
        fullList.removeItem(itemObj.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
