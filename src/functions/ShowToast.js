import {useState} from "react";
import {  toast } from 'react-toastify';

function ShowToast(type, curItem){

    const serializedState = localStorage.getItem('state');
    const statedata = JSON.parse(serializedState);

    if (statedata.cartItems.length >= 0) {
        if (type === 'add') {
            if (statedata.cartItems.length === 0 || statedata.cartItems.length > 0) {
            toast.success('Item Added');
            }
         } else if(type === 'remove') {
          
            const theItem = statedata.cartItems.find(product => product.product_id === curItem.product_id);
            if (theItem) {
                toast.error('Item Removed');
            }
        }else {
            const theItem = statedata.cartItems.find(product => product.product_id === curItem.product_id);
            if (theItem) {
              toast.error('Item Removed');
            }
          }
    }
    
}

export default ShowToast;