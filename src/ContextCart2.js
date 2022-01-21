import React, { useContext } from "react";
import { products } from "./products";
import { CartContext2 } from "./App2";
import Items from './items';

const ContextCart2 = () => {

    const {data} = useContext(CartContext2);

    return (
        <div>
            {
                data.map((curItem) => {
                    return <Items key={curItem.product_id} />
                })
            }
        </div>
    )
}


export default ContextCart2;