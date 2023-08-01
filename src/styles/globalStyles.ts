import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    background-color: ${colors.Alabaster};
    font-family: 'Ubuntu';
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
