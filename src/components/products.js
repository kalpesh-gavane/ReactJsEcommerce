import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './logo.svg';
import { toast } from 'react-toastify';
import Toaster from "./Toaster";
import 'react-toastify/dist/ReactToastify.css';

let render = true;

const Products = (props) => {
    //console.log(props);

    const url = 'https://allcitysolution.com/api/categories';

    const getData = () => {
        const counterState = localStorage.getItem('counter');
        return JSON.parse(counterState);
    }

    const setData = (data) => {
        const serializedState = JSON.stringify(data);
        localStorage.setItem('counter', serializedState);
    }

    let [counterhome, setCount] = useState(getData());
    let productcontent = null;
    const [product, setProduct] = useState();

    useState(() => {

        const serializedState = localStorage.getItem('state');
        const statedata = JSON.parse(serializedState);

        if (statedata) {
            //  console.log(statedata.data.cartItems);
            if (statedata.cartItems.length > 0) {
                props.data.cartItems = statedata.cartItems;
                props.data.totalAmount = statedata.totalAmount;
                props.data.totalItems = statedata.totalItems;
            }
        }

    })

    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    const showToast = (type, curItem) => {
        //console.log(type);
        if (props.data.cartItems.length >= 0) {
            if (type === 'add') {
                if (props.data.cartItems.length === 0 || props.data.cartItems.length > 0) {
                    toast.success('Item Added');
                }
            } else {

                const theItem = props.data.cartItems.find(product => product.product_id === curItem.category_id);

                // console.log(curItem);
                if (theItem) {
                    toast.error('Item Removed');
                }
            }
        }

    };

    const handleClick = (index, type) => {

        if (type === 'add') {
            const counter2 = getData();
            setCount(state2 => {
                const newState = counter2
                return newState
            });
            setCount(state2 => {
                const newState = { ...state2 } //keep state immutable
                !newState[index] && (newState[index] = 0)
                newState[index]++;
                setData(newState);
                return newState
            });
        } else if (type === 'minus') {
            const counter2 = getData();
            setCount(state2 => {
                const newState = counter2
                return newState
            });

            setCount(state2 => {
                const newState = { ...state2 } //keep state immutable
                !newState[index] && (newState[index] = 0)

                if (newState[index] > 0) {
                    newState[index]--
                }

                setData(newState);
                return newState
            });
        }

    };

    if (props.data.search === 'EVENT MANAGEMENT') {

        console.log('if1');

        if (render) {
            console.log('if2');
            const result = product.filter((item3) => {
                return item3.category_name === props.data.search;
            });
            // console.log(result);
            setProduct(result);
            render = false;
        } else {
            console.log('else');
            axios.get(url).then(response => {
                //console.log(response.data);
                setProduct(response.data.data);
            }).catch((err) => {
                // console.log(err);
            });
        }

    }

    if (product) {
        // console.log(product);
        productcontent = product.map((curItem) => {
            // console.log(curItem.userId);
            return <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={curItem.category_id}>
                <div className="single-product">
                    <div className="product-img">
                        <a>
                            <img className="default-img" src={logo} alt="#" />
                        </a>
                        <div className="button-head">

                            <div className="product-action">

                                <div className="qty mt-5">
                                    <button className="minus" onClick={() => {
                                        showToast('minus', curItem);
                                        handleClick(curItem.category_id, 'minus');
                                        props.ramovefromocartHandler({ product_id: curItem.category_id })
                                    }}>-</button>
                                    <input type="text"
                                        disabled={true}
                                        value={getData()[curItem.category_id]}
                                        className="countdown" />
                                    <button className="plus btn-btn-primary" onClick={() => {
                                        showToast('add', curItem);
                                        handleClick(curItem.category_id, 'add');
                                        props.addTocartHandler({ product_id: curItem.category_id, mrp: 6 + curItem.category_id, name: curItem.category_name, quantity: 1 });
                                    }}>+</button>
                                </div>

                            </div>

                            <div className="product-action-2">
                            </div>
                        </div>
                    </div >
                    <div className="product-content">
                        <h3>
                            <a href="#"> {curItem.category_name}</a>
                            <a href="#"></a>
                        </h3>
                        <div className="product-price">
                            <span>$ {curItem.category_id + 43}</span>
                        </div>
                    </div>
                </div >
            </div >
        });
    }

    return (
        <>
            <Toaster />
            {productcontent}
        </>
    )

}

export default Products;