import TYPES from "../types/TYPES";

export const deleteTodoAction = (id) => {
  return {
    type: TYPES.DELETE_TODO,
    payload: {
      id: id,
    },
  };
};

export const addTodoAction = (textValue) => {
  return {
    type: TYPES.ADD_TODO,
    payload: {
      text: textValue,
    },
  };
};
