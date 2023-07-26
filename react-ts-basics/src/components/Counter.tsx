interface CounterProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

export default function Counter({ setCount, count }: CounterProps) {
  function handleCountUp(): void {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function handleCountDown(): void {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  return (
    <div>
      <h1>The current number is {count}</h1>
      <button onClick={handleCountUp}>Increase Count</button>
      <button onClick={handleCountDown}>Decrease Count</button>
    </div>
  );
}
