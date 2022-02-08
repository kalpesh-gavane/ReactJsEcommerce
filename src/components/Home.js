import React, { useEffect } from "react";
import { useState } from "react";
import { products } from './products';
import logo from './logo.svg';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home(props) {

  useState(() => {
    const serializedState = localStorage.getItem('state');
    const statedata = JSON.parse(serializedState);
    console.log(statedata);
    if (statedata) {
      //  console.log(statedata.data.cartItems);
      if (statedata.cartItems.length > 0) {
        props.data.cartItems = statedata.cartItems;
        props.data.totalAmount = statedata.totalAmount;
        props.data.totalItems = statedata.totalItems;
      }
    }

  })
  // toast.success("Success Notification !");

  //console.log(props);
  //console.log(props.data.cartItems.length);
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



  const showToast = (type) => {
    // console.log(type);
    if (props.data.cartItems.length >= 0) {
      if (type == 'add') {
        if (props.data.cartItems.length == 0 || props.data.cartItems.length > 0) {
          toast.success('Item Added');
        }
      } else {
        if (props.data.cartItems.length > 0) {
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

  // const [counter, setCounter] = useState(1);
  // const incrementCounter = () => setCounter(counter + 1);
  // let decrementCounter = () => setCounter(counter - 1);

  // if (counter <= 1) {
  //   decrementCounter = () => setCounter(1);
  // }

  //console.log(counter);
  // let {data} = props;
  //console.warn(props.data);

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
                        showToast('minus');
                        props.ramovefromocartHandler({ product_id: curItem.product_id })
                      }}>-</button>
                      <input type="text" disabled={true} className="countdown" value={0} />
                      <button className="plus btn-btn-primary" onClick={() => {

                        showToast('add');
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