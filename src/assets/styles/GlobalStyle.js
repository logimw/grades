import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500&display=swap');
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }


  body {
    font-family: 'Lato', sans-serif;
  }
  a, button {
    font-family: 'Blinker', sans-serif;
  }
`;
