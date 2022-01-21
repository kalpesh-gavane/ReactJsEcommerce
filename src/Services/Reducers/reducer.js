// import { ADD_TO_CART } from "../../constants"

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
};

export default function cardItems(state = initialState, action) {

  switch (action.type) {
    case 'ADD_TO_CART':
      // console.log(state.totalItems);
      const theItem = state.cartItems.find(product => product.product_id === action.data.product_id);
      if (theItem) {
        // console.log('matched');
        return { ...state, totalItems: state.totalItems + 1, totalAmount:theItem.quantity * theItem.mrp, cartItems: state.cartItems.map(item => item.product_id === action.data.product_id ? { ...item, quantity: item.quantity + 1, } : item) }
      } else {
        // console.log(action.data);
        return {
          ...state,
          cartItems: [...state.cartItems, action.data],
          totalItems: state.totalItems + 1,
          totalAmount:action.data.mrp * 1,
        };
      }
      break;

    case 'REMOVE_FROM_CART':
      // console.log(state.cartItems);
      const theItem2 = state.cartItems.find(product => product.product_id === action.data.product_id);
      if (theItem2) {
        // console.log('matched');
        if (theItem2.quantity > 1) {
          return { ...state, totalItems: state.totalItems - 1, cartItems: state.cartItems.map(item => item.product_id === action.data.product_id ? { ...item, quantity: item.quantity - 1, } : item) }
        } else {
          return {
            ...state,
            cartItems: state.cartItems.filter((curElem) => {
              return curElem.product_id !== theItem2.product_id;
            }),
            totalItems: state.totalItems - 1,
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