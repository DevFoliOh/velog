import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'Styles/GlobalStyle';
import Routes from 'Routes';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'Modules/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
