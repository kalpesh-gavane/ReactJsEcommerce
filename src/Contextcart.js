import React, { useContext, useEffect, useState } from "react";
import Items from './items';
import { CartContext } from './App';
import axios from 'axios';
import { products } from './components/products';

function Contextcart() {

    let content = null

    //  const { products } = useContext(CartContext);

    // const url = 'https://api.publicapis.org/entries';

    // const [product, setProduct] = useState({
    //     data: null
    // })
    // console.log(product.data);
    
    // useEffect(() => {
    //     setProduct({
    //         data: null
    //     })
    //     axios.get(url).then(response => {
    //         setProduct({
    //             data: response.data.entries
    //         })
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }, [url])

    // if (product.data) {

    //     content = null
    //     product.data.map((curItem) => {
    //         if (curItem.quantity > 0) {

    //             return <div>kkc</div>
    //         }
    //     })
    // }

    return (
        <div className='row'>
            {
                products.map((curItem) => {
                   return <Items key={curItem.product_id} {...curItem} />
                })
              
           }
        </div>
    )

}

export default Contextcart;