import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <GlobalStyles />
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
