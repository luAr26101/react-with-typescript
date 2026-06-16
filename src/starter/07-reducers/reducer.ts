export type CounterState = {
  count: number;
  status: string;
};
export const initialState: CounterState = {
  count: 1,
  status: "Pending",
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

type CounterAction = UpdateCountAction | SetStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return {
        ...state,
        status: action.payload === "active" ? "Active" : "Inactive",
      };
    default: {
      const unhandledActionType: never = action;
      throw new Error("Unhandled action type: " + unhandledActionType);
    }
  }
};
