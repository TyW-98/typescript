import { Fragment, ReactNode, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

export default function App() {
  const [count, setCount] = useState(0);

  function handleRender(item: string): ReactNode {
    return <span>{item}</span>;
  }

  return (
    <Fragment>
      <Header />
      <Section>Test section prop</Section>
      <Counter count={count} setCount={setCount} />
      <List items={["A", "B", "C"]} render={handleRender} />
    </Fragment>
  );
}
