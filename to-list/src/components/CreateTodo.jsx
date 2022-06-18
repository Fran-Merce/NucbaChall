import React, { useState, useReducer, useContext, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { addTodoAction } from "../actions/actions";
import { todoContext } from "../context/context";
import "../index.css";

import InputTodoWrapper from "./styles/InputTodoWrapper";
const CreateTodo = () => {
  const [textValue, setTextValue] = useState("");
  const { dispatch } = useContext(todoContext);

  const onChangeText = e => {
    setTextValue(e.target.value);
  };
  const addTodo = e => {
    e.preventDefault();
    if (textValue === "") return;
    dispatch(addTodoAction(textValue));
    setTextValue("");
  };
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={addTodo}>
        <InputTodoWrapper>
          <AiOutlinePlusCircle
            className="icon"
            onClick={addTodo}
            fontSize="1.3rem"
            cursor="pointer"
          />
          <input
            type="text"
            onChange={onChangeText}
            value={textValue}
            placeholder="Aprender React..."
          />
        </InputTodoWrapper>
      </form>
    </div>
  );
};

export default CreateTodo;
