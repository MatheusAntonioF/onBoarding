import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased !important;

    font-family: 'Baloo Chettan 2', cursive, sans-serif;
    font-size: 100%;

    background: ${({ theme }) => theme.background.main}
  }

  input, button {
    color: ${({ theme }) => theme.text.main}
  }

  a {
    text-decoration: none;
  }
`;
