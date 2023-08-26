import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <GlobalStyles />
          <App />
          <ToastContainer autoClose={1800} />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
