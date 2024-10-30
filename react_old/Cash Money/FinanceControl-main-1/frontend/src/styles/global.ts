// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #D9E5D6;
    --white: #f2f3f5;
    --black: #000103;
    --red: #F7717D;
    --green: #7DDF64;
    --blue: #279AF1;
    --silver: #5c5d67
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--black);
  }

  /*Responsividade de tela*/
  @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  body,  input,  textarea,  button {
    font: 700 1rem 'Harmattan', sans-serif;
  }

  button a {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
