
// import { ADD_TO_CART } from "../../constants"
export const addTocart = (data) => {
    // console.log(data);
    return {
        type: 'ADD_TO_CART',
        data: data
    }
}
export const removeFromocart = (data) => {
    // console.log(data);
    return {
        type: 'REMOVE_FROM_CART',
        data: data
    }
}