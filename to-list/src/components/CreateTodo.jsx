import React, { useState, useReducer, useContext, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import '../index.css'
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

    dispatch({
      type: TYPES.ADD_TODO,
      payload: {
        text: textValue,
      },
    });
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
