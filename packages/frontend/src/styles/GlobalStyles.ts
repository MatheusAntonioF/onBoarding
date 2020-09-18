import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased !important;

    font-family: 'Baloo Chettan 2', cursive, sans-serif;
    font-size: 100%;

    background: ${({ theme }) =>
      theme.background.main} url(${background}) no-repeat 80% top;
    background-origin: border-box;
    background-size: 500px;
  }

  input, button {
    color: ${({ theme }) => theme.text.main}
  }

  a {
    text-decoration: none;
  }
`;
