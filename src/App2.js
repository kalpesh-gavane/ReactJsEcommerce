import React, { createContext } from "react";
import Items from './items';
import { products } from './products';
import ContextCart2 from './ContextCart2';

export const CartContext2 = createContext();

function App2() {

    return (
        <div className="row col-md-12">
            <CartContext2.Provider value={products}>
                <ContextCart2></ContextCart2>
            </CartContext2.Provider>
        </div>
    )

}


export default App2;