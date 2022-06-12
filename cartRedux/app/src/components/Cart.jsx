import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCartAction } from "../redux/actions/cartActions";
import { ProductCart } from "./ProductCart";

export const Cart = ({ setCart }) => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { cart, total } = state;
  const handleClearCart = e => {
    e.preventDefault();
    dispatch(clearCartAction());
  };

  return (
    <>
      {cart.length !== 0 &&
        cart.map(item => <ProductCart data={item} key={item.id} />)}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setCart(false)}>Close Cart</button>
        <p>{total}</p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </>
  );
};
