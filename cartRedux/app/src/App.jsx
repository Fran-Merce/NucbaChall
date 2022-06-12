import { useState } from "react";
import { Cart } from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { CartStyled } from "./components/styles/CartStyled";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { products } from "./data/data";
function App() {
  const [cart, setCart] = useState(false);

  return (
    <>
      {products.map(data => (
        <ProductCard key={data.id} data={data} />
      ))}
      <button 
        style={{ fontSize: "3rem" }}
        onClick={() => setCart(true)}>
        carrito
      </button>
      {cart && (
        <CartStyled>
          <Cart setCart={setCart} />
        </CartStyled>
      )}
      <GlobalStyle />
    </>
  );
}

export default App;
