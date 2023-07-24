import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(item: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  // Create one instance of FullList
  static instance: FullList = new FullList();

  // Private keyword to ensure that constructor can only be called within the class itself and not from outside.
  // Use when there is only a single instance of a class to shared across the entire application.
  private constructor(
    // privating List make its accecssible within the class
    private _list: ListItem[] = []
  ) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("taskList");

    if (typeof storedList !== "string") {
      return;
    }

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);
  }

  save(): void {
    localStorage.setItem("taskList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(list: ListItem): void {
    this._list.push(list);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
