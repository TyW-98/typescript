import { useState, useReducer, ChangeEvent } from "react";

interface ChildrenType {
  children: (num: number) => React.ReactNode; // <- A function that takes in a number argument and returns a ReactNode
}

const initState = { count: 0, text: "" };

const enum CountActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INPUT = "INPUT",
}

type CountAction = {
  type: CountActionType;
  text?: string;
};

const reducer = (
  state: typeof initState,
  action: CountAction
): typeof initState => {
  switch (action.type) {
    case CountActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CountActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CountActionType.INPUT:
      return { ...state, text: action.text ?? "" }; // <-- If its null (indicated by ??) put in an empty string ("")
    default:
      return state;
  }
};

export default function Counter({ children }: ChildrenType) {
  //   const [count, setCount] = useState<number>(0);

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={() => dispatch({ type: CountActionType.INCREMENT })}>
          +
        </button>
        <button onClick={() => dispatch({ type: CountActionType.DECREMENT })}>
          -
        </button>
        <input
          type="text"
          value={state.text}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: CountActionType.INPUT, text: event.target.value })
          }
        ></input>
        <h2>{state.text}</h2>
      </div>
    </>
  );
}
