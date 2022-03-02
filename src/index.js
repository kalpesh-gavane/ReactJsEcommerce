import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartApp from './CartApp';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Services/Reducers/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const store = createStore(rootReducer)
//console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById('header_section')
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('default_section')
);

ReactDOM.render(
  <Provider store={store}>
    <CartApp />
  </Provider>,
  document.getElementById('cart_component')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
