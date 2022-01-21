// import './App.css';
import React, { createContext, useReducer, useEffect } from 'react';
import { products } from './components/products';
import Contextcart from './Contextcart';
import ReactDOM from 'react-dom';
import './index.css';
import { reducer } from './reducer';
import Cart from './cart';
import HomeContainer from './containers/HomeContainer';


export const CartContext = createContext();

// const initialState = {
//   products: products,
//   totalAmount: 0,
//   totalItems: 0,
// };


const App = (state) => {


 // console.log('agjgjhh');
 // const [state, dispatch] = useReducer(reducer, initialState);

  // const removeItem = (id) => {
  //   return dispatch({
  //     type: "remove_item",
  //     payload: id,
  //   });
  // }

  // const increment = (product_id) => {
  //   return dispatch({
  //     type: "INCREMENT",
  //     payload: product_id,
  //   });
  // }

  // const decrement = (product_id) => {
  //   return dispatch({
  //     type: "DECREMENT",
  //     payload: product_id,
  //   });
  // }

  // useEffect(() => {
  //   dispatch({ type: 'Total' });
  //   //  console.log('kal');
  // }, [state.products])

  // ReactDOM.render(
  //     <Cart></Cart>,
  //   document.getElementById('cart_component')
  // );

  return (
 
    <div className='col-md-12'>
      {/* <CartContext.Provider value={{ ...state, removeItem, increment, decrement }}> */}
        {/* <Contextcart></Contextcart> */}
      {/* </CartContext.Provider> */}
      <HomeContainer></HomeContainer>
    </div>
  );
}

export default App;
