import TYPES from "../types/TYPES";

const toDoReducer = (state = [], action) => {
  console.log(state.todos)
  switch (action.type) {
    case TYPES.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload.text, id: Date.now() }],
      };
    case TYPES.DELETE_ALL_TODO:
      return {
        ...state,
        todos: [],
      };
    case TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }
    default:
      return state;
  }

};

export default toDoReducer;
