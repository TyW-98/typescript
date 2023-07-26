import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

interface User {
  id: number;
  name: string;
}

type fiboFunc = (n: number) => number;

// Using the fiboFunc type defined above the input and output type is already defined in the type.
const fibo: fiboFunc = (n) => {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
};

// Similar to the fibo function defined above
function fib(n: number): number {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

const myNum: number = 21;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null); // same as -> useState<User[]>([])

  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef.current.value to get the value

  // Optional chaining to only log when there is a value. THis can prevent null.
  console.log(inputRef?.current?.value);

  // Not much typescript application for useEffect since not returning a value.
  useEffect(() => {
    console.log("mounting");
    // clean up function
    return () => console.log("mounting");
  }, []);

  // useCallback can be used to memorised a function. Last array is dependency array
  const addCount = useCallback(
    (): void => setCount((prevCount) => prevCount + 1),
    []
  );

  // The function shows that the event type is possible a MouseEvent(mouse-click) or KeyboardEvent(keyboard input) on a HTMLButtonElement
  const exampleEventFunction = useCallback(
    (
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      event.preventDefault();
    },
    []
  );

  // Use to memorise a value so it does not have to recalculate everytime a component re-renders.
  const result = useMemo<number>(() => fibo(myNum), [myNum]);

  return (
    <Fragment>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={addCount}> + </button>
        <h1>{result}</h1>
        <input type="text" ref={inputRef} />
      </div>
    </Fragment>
  );
}

export default App;
