import { Fragment, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { CounterProvider, initState } from "./context/CounterContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <span>Current count: {num}</span>}</Counter>
      </CounterProvider>
    </Fragment>
  );
}

export default App;
