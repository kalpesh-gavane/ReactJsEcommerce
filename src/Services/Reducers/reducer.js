// import { ADD_TO_CART } from "../../constants"
import React, { useEffect, useState } from "react";


const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
};

export default function cardItems(state = initialState, action) {

  // useState(()=>{

  // })

  //let data =state.cartItems;
  // const saveState = (data) => {
  //   try {
  //    // console.log(state);
  //     const serializedState = JSON.stringify(data);
  //     localStorage.setItem('state', serializedState);
  //   } catch (e) {
  //     // Ignore write errors;
  //   }
  // };

  switch (action.type) {
    case 'ADD_TO_CART':

      // console.log(action.data);
      const theItem = state.cartItems.find(product => product.product_id === action.data.product_id);
      if (theItem) {
        //saveState(state.cartItems);
        return { ...state, totalItems: state.totalItems + 1, totalAmount: state.totalAmount + theItem.mrp, cartItems: state.cartItems.map(item => item.product_id === action.data.product_id ? { ...item, quantity: item.quantity + 1, } : item) }
      } else {
        //saveState(state.cartItems);
        return {
          ...state,
          cartItems: [...state.cartItems, action.data],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.data.mrp,
        };
        
      }
      break;

    case 'REMOVE_FROM_CART':
      // console.log(state.cartItems);
      const theItem2 = state.cartItems.find(product => product.product_id === action.data.product_id);
      if (theItem2) {
        // console.log('matched');
        if (theItem2.quantity > 1) {
         // console.log('> 1');
          return { ...state, totalItems: state.totalItems - 1, totalAmount: state.totalAmount - theItem2.mrp, cartItems: state.cartItems.map(item => item.product_id === action.data.product_id ? { ...item, quantity: item.quantity - 1, } : item) }
        } else {
         // console.log('< 1');
          return {
            ...state,
            cartItems: state.cartItems.filter((curElem) => {
              return curElem.product_id !== theItem2.product_id;
            }),
            totalItems: state.totalItems - 1,
            totalAmount: state.totalAmount - theItem2.mrp,
          }
        }

      } else {
        // console.log('not matched');
        return {
          ...state,
          cartItems: [...state.cartItems],
          // totalItems: state.totalItems - 1,
        };
      }
      break;

    default:
      return state
  }
}