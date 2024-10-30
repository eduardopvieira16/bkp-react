// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f2f3f5;
    --white-alternative: #f0f7ee;
    --black: #4c5454;
    --red: #e83f5b;
    --green: #53a548;
    --blue: #2aa9e0;
    --blue-alternative: #20a4f3;
    --yellow: #fde12d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--white-alternative);
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
