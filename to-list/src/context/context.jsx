import { createContext, useReducer } from "react";

export const todoContext = createContext();
import React from "react";
import toDoReducer from "../reducer/toDoReducer";
let initialState = {
  todos: [],
};

export const TodoContext = ({ children }) => {
  const [{ todos }, dispatch] = useReducer(toDoReducer, initialState);
  const data = { todos, dispatch };

  return (
    <div>
      <todoContext.Provider value={data}>{children}</todoContext.Provider>
    </div>
  );
};
