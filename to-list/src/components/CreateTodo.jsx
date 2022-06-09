import React, { useState, useReducer, useContext, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { addTodoAction } from "../actions/actions";
import "../index.css";
import TYPES from "../types/TYPES.JS";

import InputTodoWrapper from "./styles/InputTodoWrapper";
const CreateTodo = ({ dispatch }) => {
  const [textValue, setTextValue] = useState("");

  const onChangeText = (e) => {
    setTextValue(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (textValue === "") return;
    dispatch(addTodoAction(textValue));
    setTextValue("");
  };
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={(e) => addTodo(e, textValue, dispatch)}>
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