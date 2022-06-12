import TYPES_CART from "../types/TYPES_CART";
export const removeFromCartAction = payload => ({
  type: TYPES_CART.REMOVE_FROM_CART,
  payload: {
    id: payload.id,
    totalProductPrice: payload.price * payload.quantityInCart,
  },
});

export const addProductAction = payload => {
  return {
    type: TYPES_CART.ADD_TO_CART,
    payload: { ...payload, quantityInCart: 1 },
  };
};

export const addQuantityAction = payload => {
  return {
    type: TYPES_CART.ADD_QUANTITY,
    payload,
  };
};

export const clearCartAction = () => ({ type: TYPES_CART.CLEAR_CART });

export const subtractQuantityAction = payload => {
  if (payload.quantityInCart === 1) return removeFromCartAction(payload);
  
  return {
    type: TYPES_CART.SUBTRACT_QUANTITY,
    payload,
  };
};
