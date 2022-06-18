import { useContext } from "react";
import GlobalStyle from "./components/styles/GlobalStyle";
import MainWrapper from "./components/styles/MainWrapper";
import TodoWrapper from "./components/styles/TodoWrapper";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";
import { todoContext } from "./context/context";

function App() {
  const { todos } = useContext(todoContext);

  return (
    <>
      <MainWrapper>
        <TodoWrapper>
          <h1>TodoList</h1>
          <CreateTodo />
          {todos &&
            todos.map(({ text, id }) => (
              <TodoItem id={id} key={id} text={text} />
            ))}
          <footer style={{ cursor: "pointer", margin: "2rem", width: "90%" }}>
            {todos.length !== 0 && <p>Borrar todas las tareas</p>}
          </footer>
        </TodoWrapper>
      </MainWrapper>
      <GlobalStyle theme={"dark"} />
    </>
  );
}

export default App;
