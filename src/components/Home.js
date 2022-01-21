import React from "react";
import { products } from './products';
import logo from './logo.svg';

function Home(props) {
  // let {data} = props;
  console.warn(props.data);
  return (
    <div className='row'>
      {
        products.map((curItem) => {
          return <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={curItem.product_id}>
            <div className="single-product">
              <div className="product-img">
                <a >
                  <img className="default-img" src={logo} alt="#" />
                </a>
                <div className="button-head">
                  <div className="product-action">
                    <div className="qty mt-5">
                      <button className="minus" onClick={() => props.ramovefromocartHandler({ product_id: curItem.product_id})}>-</button>
                      <input type="text" disabled={true} className="countdown" value={0} />
                      <button className="plus btn-btn-primary" onClick={() => props.addTocartHandler({ product_id: curItem.product_id,mrp:curItem.mmd_price, name: curItem.product_name, quantity: 1 })}>+</button>
                    </div>
                  </div>
                  <div className="product-action-2">
                  </div>
                </div>
              </div >
              <div className="product-content">
                <h3>
                  <a href="#"> {curItem.product_name}</a>
                  <a href="#"></a>
                </h3>
                <div className="product-price">
                  <span>$  {curItem.mrp}</span>
                </div>
              </div>
            </div >
          </div >
        })

      }
    </div>
  )
}

export default Home;