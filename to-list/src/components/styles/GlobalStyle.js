import { createGlobalStyle } from "styled-components";
import bg from  './mesh-gradient.png'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background: ${({ theme }) =>
      theme === "dark" ? "#1a1a1a" : "#fff"};
      background-image: url(${bg});
      background-size: cover;

  }

`;
export default GlobalStyle;