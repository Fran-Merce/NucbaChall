import React from "react";
import { addProductAction, addQuantityAction } from "../redux/actions/cartActions";
import { CardStyled } from "./styles/CardStyled";
import { useSelector, useDispatch } from "react-redux/es/exports";

const ProductCard = ({ data }) => {
  const { id, name, price, image } = data;

  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    cart.some(item => item.id === id)
      ? dispatch(addQuantityAction(data))
      : dispatch(addProductAction(data))
  };

  return (
    <CardStyled>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <button onClick={handleAddCart}>buy</button>
    </CardStyled>
  );
};

export default ProductCard;
