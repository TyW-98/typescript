import {
  ChangeEvent,
  createContext,
  useReducer,
  useCallback,
  useContext,
} from "react";

type CounterStateType = {
  count: number;
  text: string;
};

export const initState: CounterStateType = { count: 0, text: "" };

const enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INPUT = "INPUT",
}

type CountAction = {
  type: ActionType;
  text?: string;
};

const reducer = (
  state: CounterStateType,
  action: CountAction
): CounterStateType => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionType.INPUT:
      return { ...state, text: action.text ?? "" }; // <-- If its null (indicated by ??) put in an empty string ("")
    default:
      return state;
  }
};

const useCounterContext = (initState: CounterStateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(() => {
    dispatch({ type: ActionType.INCREMENT });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: ActionType.DECREMENT });
  }, []);

  const handleTextInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: ActionType.INPUT, text: event.target.value });
    },
    []
  );

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (event: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: React.ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & CounterStateType): React.ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

type UseTextHookType = {
  text: string;
  handleTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useText = (): UseTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};
