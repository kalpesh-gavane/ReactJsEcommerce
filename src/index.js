import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartApp from './CartApp';
import reportWebVitals from './reportWebVitals';
import Cart from './cart';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Services/Reducers/index'

const store=createStore(rootReducer)
//console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mens')
);

ReactDOM.render(
  <Provider store={store}>
    <CartApp />
  </Provider>,
  document.getElementById('cart_component')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('womens')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
