import React, { useContext } from "react";
import { CartContext } from "./App";


const Items = ({ product_id, product_name, mrp, quantity }) => {

  // const { removeItem, increment, decrement } = useContext(CartContext);


  return (
    // <div className='card col-md-3'>
    //   <div className='card-header'>
    //     {product_name}
    //   </div>
    //   <div className='card-body'>
    //     {mrp} <br />
    //     <div className="counter">
    //       <span className="down" onClick={() => decrement(product_id)}>-</span>
    //       <input type="text" placeholder={quantity} />
    //       <span className="up" onClick={() => increment(product_id)} >+</span>
    //     </div>

    //     <button onClick={() => removeItem(product_id)} className="btn btn-danger">Delete</button>
    //   </div>
    // </div>

    // <div className="col-xl-3 col-lg-4 col-md-4 col-12">
    //   <div className="single-product">
    //     <div className="product-img">
    //       <a >
    //         <img  className="default-img"  src="http://localhost/laravel/public/images/products/550x750.png"  alt="#" />
    //        </a>
    //       <div className="button-head">
    //         <div className="product-action">
    //           <a data-toggle="modal" data-target="#product_detail_modal" title="Quick View" href="#"><i className="ti-eye"></i><span>Quick Shop</span></a>
    //           <div className="qty mt-5">
    //             <button className="minus" onClick={() => decrement(product_id)}>-</button>
    //             <input type="text" disabled={true} className="countdown" value={quantity} />
    //             <button className="plus btn-btn-primary" onClick={() => increment(product_id)}>+</button>
    //           </div>
    //         </div>
    //         <div className="product-action-2">
    //         </div>
    //       </div>
    //     </div >
    //     <div className="product-content">
    //       <h3>
    //         <a href="#"> {product_name}</a>
    //         <a href="#"></a>
    //       </h3>
    //       <div className="product-price">
    //         <span>$  {mrp}</span>
    //       </div>
    //     </div>
    //   </div >
    // </div >

    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
    <div className="single-product">
      <div className="product-img">
        <a >
          <img  className="default-img"  src="http://localhost/laravel/public/images/products/550x750.png"  alt="#" />
         </a>
        <div className="button-head">
          <div className="product-action">
            <a data-toggle="modal" data-target="#product_detail_modal" title="Quick View" href="#"><i className="ti-eye"></i><span>Quick Shop</span></a>
            <div className="qty mt-5">
              <button className="minus" >-</button>
              <input type="text" disabled={true} className="countdown" value={quantity} />
              <button className="plus btn-btn-primary" >+</button>
            </div>
          </div>
          <div className="product-action-2">
          </div>
        </div>
      </div >
      <div className="product-content">
        <h3>
          <a href="#"> {product_name}</a>
          <a href="#"></a>
        </h3>
        <div className="product-price">
          <span>$  {mrp}</span>
        </div>
      </div>
    </div >
  </div >
  )
}

export default Items;