import { useReducer } from "react";

import GlobalStyle from "./components/styles/GlobalStyle";
import MainWrapper from "./components/styles/MainWrapper";
import TodoWrapper from "./components/styles/TodoWrapper";

import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";

import toDoReducer from "./reducer/toDoReducer";
import TYPES from "./types/TYPES";

function App() {
  let initialState = {
    todos: [],
  };

  const [{ todos }, dispatch] = useReducer(toDoReducer, initialState);

  return (
    <>
      <MainWrapper>
        <TodoWrapper>
          <h1>TodoList</h1>
          <CreateTodo dispatch={dispatch} />
          {todos &&
            todos.map(({ text, id }) => (
              <TodoItem id={id} dispatch={dispatch} key={id} text={text} />
            ))}
          <footer
            onClick={() => dispatch({ type: TYPES.DELETE_ALL_TODO })}
            style={{ cursor: "pointer", margin: "2rem", width: "90%" }}
          >
            {todos.length !== 0 && <p>Borrar todas las tareas</p>}
          </footer>
        </TodoWrapper>
      </MainWrapper>
      <GlobalStyle theme={"dark"} />
    </>
  );
}

export default App;
