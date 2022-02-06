import { CartContext } from './App';
import React, { useContext, useReducer, useState, useEffect } from 'react';
import { reducer } from './reducer';


function Cart(props) {


    return (
        <div className="right-bar">
            <div className="sinlge-bar">
                <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
            </div>
            <div className="sinlge-bar">
                <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
            </div>
            <div className="sinlge-bar shopping">
                <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">{props.data.cartItems.length}</span></a>
                <div className="shopping-item">
                    <div className="dropdown-cart-header">
                        <span>{props.data.totalItems} Items</span>
                        <a href="#">View Cart</a>
                    </div>
                    <ul className="shopping-list">
                        {
                            props.data.cartItems.map((curItem) => {
                                //  console.log('curItem');
                                // console.log(curItem.name);
                                return (
                                    <li key={curItem.product_id}>
                                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                        <h4><a href="#">{curItem.name}</a></h4>
                                        <p className="quantity">{curItem.quantity}x - <span className="amount">${curItem.mrp}</span></p>
                                    </li>
                                )

                            })
                        }

                    </ul>
                    <div className="bottom">
                        <div className="total">
                            <span>Total</span>
                            <span className="total-amount">$ {props.data.totalAmount}</span>
                        </div>
                        <a href="checkout.html" className="btn animate">Checkout</a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cart;