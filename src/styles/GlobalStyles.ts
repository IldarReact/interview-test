import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
