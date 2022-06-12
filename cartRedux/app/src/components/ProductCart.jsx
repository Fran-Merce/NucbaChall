import React from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  addQuantityAction,
  removeFromCartAction,
  subtractQuantityAction,
} from "../redux/actions/cartActions";
import { ProductCartWrapper } from "./styles/ProductCartWrapper";

export const ProductCart = ({ data }) => {
  const { image, price, name, quantityInCart } = data;
  const priceFormated = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "ARS",
  }).format(price);

  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addQuantityAction(data));
  const handleSubtract = () => dispatch(subtractQuantityAction(data));
  const handleDelete = () => dispatch(removeFromCartAction(data));
  return (
    <ProductCartWrapper>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{quantityInCart}</p>
      <p>{priceFormated}</p>
      <div>
        <p onClick={handleSubtract}>sub -</p>
        <hr />
        <p onClick={handleAdd}>add +</p>
      </div>
      <p onClick={handleDelete}>delete</p>
    </ProductCartWrapper>
  );
};
