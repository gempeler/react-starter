import { createContext } from "react";

export const initialState = null;

export const init = () => {
  return {
    count: 0,
  };
};

export const ACTIONS = {
  RESET_STATE: "RESET_STATE",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return {
        ...state,
        count: 0,
      };
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export const StateContext = createContext(null);
