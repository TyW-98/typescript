import { useCounter, useText } from "./context/CounterContext";

interface ChildrenType {
  children: (num: number) => React.ReactNode; // <- A function that takes in a number argument and returns a ReactNode
}

export default function Counter({ children }: ChildrenType) {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useText();

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" value={text} onChange={handleTextInput}></input>
        <h2>{text}</h2>
      </div>
    </>
  );
}
