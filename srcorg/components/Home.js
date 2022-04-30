import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { products } from './products';
import logo from './logo.svg';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {

  // console.log('home');

  const counterState = localStorage.getItem('counter');
  let counterdata = JSON.parse(counterState);

  let [counterhome, setCount] = useState([]);

  // console.log(count);

  React.useEffect(()=>{

    const counterState = localStorage.getItem('counter');
    let counterdata = JSON.parse(counterState);

    setCount(counterdata);

  },[]);

  // if(counterdata['1707'] == 0)
  // setCount(counterdata => {
  //   const newState = { ...counterdata } //keep state immutable
  //   return newState
  // });

  // console.log(`${count['1706']}-${count['1707']}-home`);

  useState(() => {
    const serializedState = localStorage.getItem('state');
    const statedata = JSON.parse(serializedState);

    if (counterdata) {
      const product_count = JSON.stringify(counterdata);
      localStorage.setItem('counter', product_count);
    } else {
      const product_count = JSON.stringify([]);
      localStorage.setItem('counter', product_count);
    }

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

        const product_count = JSON.stringify(newState);
        localStorage.setItem('counter', product_count);

        return newState

      });
    } else if (type == 'minus') {
      setCount(state2 => {
        const newState = { ...state2 } //keep state immutable
        !newState[index] && (newState[index] = 0)

        if (newState[index] > 0) {
          // console.log(newState[index]);
          newState[index]--
        }

        const product_count = JSON.stringify(newState);
        localStorage.setItem('counter', product_count);
        return newState
      });
    }

  };

  // console.log(count);

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


  const counter = localStorage.getItem('counter');
  let counterlast = JSON.parse(counter);


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

  console.log(counterhome);

  return (

    <div>

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

      <section className="hero-slider">

        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                        <p>
                          Maboriosam in a nesciung eget magnae <br />
                          dapibus disting tloctio in the find it pereri <br />
                          odiy maboriosm.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">Shop Now!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="small-banner section">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br />
                    collection
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br />
                    2020
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br />
                    Up to <span>40%</span> Off
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a>
                    </li>
                  </ul>

                </div>
                <div className="tab-content" id="myTabContent">

                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row" id="mens">
                        <div className='col-md-12'>
                          <div className='row'>

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
                                              value={counterlast[curItem.product_id]}
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="women" role="tabpanel">
                    <div className="tab-single">
                      <div className="row" id="womens">

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-home-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h4>
                      <p className="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="cown-down">
        <div className="section-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 padding-right">
                <div className="image">
                  <img src="https://via.placeholder.com/750x590" alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12 padding-left">
                <div className="content">
                  <div className="heading-block">
                    <p className="small-title">Deal of day</p>
                    <h3 className="title">Beatutyful dress for women</h3>
                    <p className="text">
                      Suspendisse massa leo, vestibulum cursus nulla sit amet,
                      frungilla placerat lorem. Cars fermentum, sapien.
                    </p>
                    <h1 className="price">$1200 <s>$1890</s></h1>
                    <div className="coming-time">
                      <div className="clearfix" data-countdown="2021/02/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-blog section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">

              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July , 2020. Monday</p>
                  <a href="#" className="title">Sed adipiscing ornare.</a>
                  <a href="#" className="more-btn">Continue Reading</a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">Man’s Fashion Winter Sale</a>
                  <a href="#" className="more-btn">Continue Reading</a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">Women Fashion Festive</a>
                  <a href="#" className="more-btn">Continue Reading</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )

}

export default Home;