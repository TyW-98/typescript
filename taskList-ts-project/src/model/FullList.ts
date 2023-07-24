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
  // Create only one instance of FullList across the whole application
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

    // Pass in an array of object of the types: _id, _item, _checked
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    // Create new item for each object in array and add them them to local storage.
    parsedList.map((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
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
