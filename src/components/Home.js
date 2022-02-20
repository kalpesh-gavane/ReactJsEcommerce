import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { products } from './products';
import logo from './logo.svg';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuantity } from "../Hook/useQuantity";
import { useDispatch } from "react-redux";

const Home = (props) => {

  let state2 = { product_count: [] };

  const [count, setCount] = useState(state2);

  useState(() => {
    const serializedState = localStorage.getItem('state');
    const statedata = JSON.parse(serializedState);

    const product_count = localStorage.getItem('counter');
    const counter2 = JSON.parse(product_count);

  // console.log(counter2);
    setCount(state2 => {
      const newState = counter2
      return newState
    });

    let state2 = counter2;

    if (statedata) {
      //  console.log(statedata.data.cartItems);
      if (statedata.cartItems.length > 0) {
        props.data.cartItems = statedata.cartItems;
        props.data.totalAmount = statedata.totalAmount;
        props.data.totalItems = statedata.totalItems;
      }
    }

  })

  if (props.data.cartItems.length >= 0) {

    try {
      //  console.log(props.data);
      if (props.data.cartItems.length == 0) {
        // console.log('0');
        const serializedState = JSON.stringify(props.data);
        localStorage.setItem('state', serializedState);
      } else {
        const serializedState = JSON.stringify(props.data);
        localStorage.setItem('state', serializedState);
      }

    } catch (e) {
      // Ignore write errors;
    }
    
  }

  const handleClick = (index, type) => {

    if (type == 'add') {
      setCount(state2 => {
        const newState = { ...state2 } //keep state immutable
        !newState[index] && (newState[index] = 0)
        newState[index]++
        return newState
      });
    } else {
      setCount(state2 => {
        const newState = { ...state2 } //keep state immutable
        !newState[index] && (newState[index] = 0)
        newState[index]--

        return newState
      });
    }


  };

  // console.log(count);

  const product_count = JSON.stringify(count);
  localStorage.setItem('counter', product_count);


  const showToast = (type, curItem) => {
    // console.log(type);
    if (props.data.cartItems.length >= 0) {
      if (type == 'add') {
        if (props.data.cartItems.length == 0 || props.data.cartItems.length > 0) {
          toast.success('Item Added');
        }
      } else {
        const theItem = props.data.cartItems.find(product => product.product_id === curItem.product_id);
        if (theItem) {
          toast.error('Item Removed');
        }
      }
    }

  };

  // onClick(Event){
  //   showToast();
  // }



  // const level = props.data.cartItems;
  //   const [rows,setRows] = useState({
  //     level
  //   });

  //   React.useEffect(()=>{
  //     console.log(rows);
  //     const data = localStorage.setItem('newData',JSON.stringify(rows));
  //   });

  // console.log(props);.
  // const url = 'https://api.publicapis.org/entries';
  let productcontent = null

  const [product, setProduct] = useState({
    data: null
  })

  // useEffect(() => {
  //   // setProduct({
  //   //   data: null
  //   // })

  //   axios.get('https://api.publicapis.org/entries').then(response => {
  //     setProduct({
  //       data: response.data.entries
  //     })
  //   })

  // })

  // if (product.data) {

  //    productcontent = products.map((curItem) => {
  //       return <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={curItem.product_id}>
  //         <div className="single-product">
  //           <div className="product-img">
  //             <a>
  //               <img className="default-img" src={logo} alt="#" />
  //             </a>
  //             <div className="button-head">
  //               <div className="product-action">

  //                 <div className="qty mt-5">
  //                   <button className="minus" onClick={() => props.ramovefromocartHandler({ product_id: curItem.product_id })}>-</button>
  //                   <input type="text" disabled={true} className="countdown" value={0} />
  //                   <button className="plus btn-btn-primary" onClick={() => props.addTocartHandler({ product_id: curItem.product_id, mrp: curItem.mrp, name: curItem.product_name, quantity: 1 })}>+</button>
  //                 </div>

  //                 {/* <div className="qty mt-5">
  //                   <button className="minus" onClick={incrementCounter}>+</button>
  //                   <input type="text" disabled={true} className="countdown" value={counter} />
  //                   <button className="plus btn-btn-primary"onClick={decrementCounter}>-</button>
  //                 </div> */}
  //               </div>
  //               <div className="product-action-2">
  //               </div>
  //             </div>
  //           </div >
  //           <div className="product-content">
  //             <h3>
  //               <a href="#"> {curItem.product_name}</a>
  //               <a href="#"></a>
  //             </h3>
  //             <div className="product-price">
  //               <span>$  {curItem.mrp}</span>
  //             </div>
  //           </div>
  //         </div >
  //       </div >
  //     })

  // }


  // const handleVoteChange = (item, increment) => {
  //   const theItem = products.find(product => product.product_id === item.product_id);

  //   if (theItem) {
  //     this.setState(() => {
  //       products.map(oldItem => oldItem.product_id === item.product_id ? { ...oldItem, voteCount: 5 } : oldItem)
  //     });
  //   }
  // }

  return (
    <div className='row'>
      <ToastContainer
        position="top-center"
        title='success'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {
        products.map((curItem) => {
          return <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={curItem.product_id}>
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
                        handleClick(curItem.product_id, 'minus');
                        props.ramovefromocartHandler({ product_id: curItem.product_id })
                      }}>-</button>
                      <input type="text"
                        disabled={true}
                        value={count[curItem.product_id]}

                        className="countdown" />
                      <button className="plus btn-btn-primary" onClick={() => {
                        showToast('add', curItem);
                        handleClick(curItem.product_id, 'add');
                        // handleVoteChange(curItem, 1);
                        props.addTocartHandler({ product_id: curItem.product_id, mrp: curItem.mrp, name: curItem.product_name, quantity: 1 });
                      }}>+</button>
                    </div>
                    {/* props.addTocartHandler({ product_id: curItem.product_id, mrp: curItem.mrp, name: curItem.product_name, quantity: 1 }) */}
                    {/* <div className="qty mt-5">
                      <button className="minus" onClick={incrementCounter}>+</button>
                      <input type="text" disabled={true} className="countdown" value={counter} />
                      <button className="plus btn-btn-primary"onClick={decrementCounter}>-</button>
                    </div> */}
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