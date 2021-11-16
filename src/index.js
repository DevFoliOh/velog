import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'Styles/GlobalStyle';
import Routes from 'Routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
