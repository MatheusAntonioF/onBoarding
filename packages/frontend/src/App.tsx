import React from 'react';

import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/GlobalStyles';

import light from './styles/themes/light';

import Routes from './routes';

import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};

export default App;
