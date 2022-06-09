import React, { useState } from "react";
import TYPES from "../types/TYPES";
import TodoItemWrapper from "./styles/TodoItemWrapper";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { deleteTodoAction } from "../actions/actions";
const TodoItem = ({ text, dispatch, id }) => {
  const [complete, setComplete] = useState(false);

  const deleteTodo = () => {
    dispatch(deleteTodoAction(id));
  };

  const completeTodo = () => {
    setComplete(!complete);
  };

  return (
    <TodoItemWrapper>
      <p style={{ textDecoration: `${complete ? "line-through" : "none"}` }}>
        {text}
      </p>
      <div>
        <AiFillDelete onClick={deleteTodo}>delete</AiFillDelete>
        <AiOutlineCheck onClick={completeTodo}></AiOutlineCheck>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
