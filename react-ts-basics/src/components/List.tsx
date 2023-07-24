import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export default function List<T>({ items, render }: ListProps<T>) {
  return (
    <ul>
      {items.map((itm, idx) => {
        return <li key={idx}>{render(itm)}</li>;
      })}
    </ul>
  );
}
