import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

import StoreProvider from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router basename={'/ReactAuth03'}>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
