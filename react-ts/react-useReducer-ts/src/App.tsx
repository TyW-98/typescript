import { Fragment, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Counter>{(num: number) => <span>Current count: {num}</span>}</Counter>
    </Fragment>
  );
}

export default App;
