// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Adicione mais estilos globais conforme necessário */
`;

export default GlobalStyle;
