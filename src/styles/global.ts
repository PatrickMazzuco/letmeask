import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body, html, #root, #root > div {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.palette.background};
  }
  
  body,
  input,
  button,
  textarea {
    color: ${(props) => props.theme.palette.textMain};
    font: 400 1rem "Roboto", sans-serif;
  }
`;
