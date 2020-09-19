import React from 'react';

import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/GlobalStyles';

import light from './styles/themes/light';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
