import TYPES_CART from "../types/TYPES_CART";

const initialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPES_CART.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
        total: state.total + payload.price,
      };

    case TYPES_CART.ADD_QUANTITY:
      const newCart = state.cart.map(item => {
        if (item.id === payload.id) {
          item.quantityInCart += 1;
        }
        return item;
      });

      return {
        ...state,
        cart: newCart,
        total: state.total + payload.price,
      };

    case TYPES_CART.CLEAR_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };

    case TYPES_CART.SUBTRACT_QUANTITY:
      const newCartQuantity = state.cart.map(item => {
        if (item.id === payload.id) {
          console.log(item.quantityInCart);
          item.quantityInCart -= 1;
          return item;
        }
        return item;
      });

      return {
        ...state,
        cart: newCartQuantity,
        total: state.total - payload.price,
      };
    case TYPES_CART.REMOVE_FROM_CART:
      const newCartRemove = state.cart.filter(item => item.id !== payload.id);
      return {
        ...state,
        cart: newCartRemove,
        total: state.total - payload.totalProductPrice,
      };
    default:
      return state;
  }
};
