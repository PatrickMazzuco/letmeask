import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.textMain};
    background: ${(props) => props.theme.background};
  }
  
  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
  }
`;
