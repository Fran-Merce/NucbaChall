import TYPES from "../types/TYPES.JS";

const toDoReducer = (state = [], action) => {
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
    
    default:
      return state;
  }
};

export default toDoReducer;
