import '../App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../index.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//import SearchBar from './SearchBar';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from "react-router-dom";

const Header = (props) => {

  const serializedState = localStorage.getItem('state');
  const statedata = JSON.parse(serializedState);

  const [count, setCount] = useState({ default: 0 });
  const [myOptions, setMyOptions] = useState([]);

  const url = 'https://allcitysolution.com/api/categories';

  useState(() => {

    const product_count = localStorage.getItem('counter');
    const counter2 = JSON.parse(product_count);
    if (statedata) {
      //  console.log(statedata.data.cartItems);
      if (statedata.cartItems.length > 0) {
        props.data.cartItems = statedata.cartItems;
        props.data.totalAmount = statedata.totalAmount;
        props.data.totalItems = statedata.totalItems;
      }
    }
    // console.log(counter2);
    if (counter2) {
      // console.log('if');
      setCount(state2 => {
        const newState = counter2
        return newState
      });
    } else {
      // console.log('else');
      const test = JSON.stringify(count);
      localStorage.setItem('counter', test);
    }

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

  // console.log(count);

  function showToast2(type, curItem) {

    // console.log(type);
    if (statedata.cartItems.length >= 0) {
      if (type == 'add') {
        if (statedata.cartItems.length == 0 || statedata.cartItems.length > 0) {
          toast.success('Item Added');
        }
      } else if (type == 'remove') {
        const product_count = localStorage.getItem('counter');
        const counter2 = JSON.parse(product_count);

        setCount(count => {
          const newState = counter2;
          return newState;
        });

        setCount(count => {
          const newState = { ...count }; //keep state immutable
          !newState[curItem.product_id] && (newState[curItem.product_id] = 0);

          if (newState[curItem.product_id] > 0) {
            newState[curItem.product_id] = 0;

            const product_count = JSON.stringify(newState);
            localStorage.setItem('counter', product_count);
          }

          //console.log(newState);
          return newState;
        });

        const theItem = statedata.cartItems.find(product => product.product_id === curItem.product_id);
        if (theItem) {
          toast.error('Item Removed');
        }
      } else if (type == 'cartEmpty') {
        // console.log('cart');
        toast.error('Your Cart is Empty');
      } else {
        const theItem = statedata.cartItems.find(product => product.product_id === curItem.product_id);
        if (theItem) {
          toast.error('Item Removed');
        }
      }
    }

  }

  if (props.data.cartItems.length >= 0) {

    try {
      //  console.log(props.data);

      const serializedState = JSON.stringify(props.data);
      localStorage.setItem('state', serializedState);

      const test = JSON.stringify({ default: 0 });
      localStorage.setItem('counter', test);

    } catch (e) {
      // Ignore write errors;
    }

  }

  useEffect(() => {
    axios.get(url).then(response => {
      //  console.log('useEffect');
      setMyOptions(response.data.data);
    }).catch((err) => {
      console.log(err);
    });

  }, []);


  const handleOnFocus = (value) => {
    // console.log(value);
    props.productFilterHandler(value);
  }

  const product_count = JSON.stringify(count);
  localStorage.setItem('counter', product_count);

  //console.log(myOptions);
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

      <header className="header shop">

        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">

                <div className="top-left">
                  <ul className="list-main">
                    <li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
                    <li><i className="ti-email"></i> support@shophub.com</li>
                  </ul>
                </div>

              </div>
              <div className="col-lg-8 col-md-12 col-12">

                <div className="right-content">
                  <ul className="list-main">
                    <li><i className="ti-location-pin"></i> Store location</li>
                    <li>
                      <i className="ti-alarm-clock"></i> <a>Daily deal</a>
                    </li>
                    <li><i className="ti-user"></i> <a>My account</a></li>
                    <li><i className="ti-power-off"></i><a href="">Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">

                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="logo" /></a>
                </div>

                <div className="mobile-nav">
                  <div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button"
                    className="slicknav_btn slicknav_collapsed"><span
                      className="slicknav_menutxt"></span><span className="slicknav_icon slicknav_no-text"><span
                        className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span
                          className="slicknav_icon-bar"></span></span></a>

                  </div>
                </div>

              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                  <div className="search-bar">
                    <div className="nice-select"><span className="current">All Category</span>

                    </div>
                    <form>
                      <div className='main_search' style={{ width: 400 }}>
                        <Autocomplete
                          id="country-select-demo"
                          sx={{ width: 400 }}
                          options={myOptions}
                          autoHighlight
                          getOptionLabel={(option) => option.category_name}
                          onChange={(event, value) => handleOnFocus(value.category_name)}
                          renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                              {option.category_name}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Search Services"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-12" id="cart_component">

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

                        {(() => {

                          if (props.data.cartItems.length > 0) {
                            return (
                              <Link to='/cart'>Cart</Link>
                            )
                          } else {
                            return (
                              <Link to='#' onClick={() => {
                                showToast2('cartEmpty', 'none');
                              }} >View Cart</Link>
                            )
                          }

                        })()}
                      </div>
                      <ul className="shopping-list">

                        {
                          props.data.cartItems.map((curItem) => {
                            return (
                              <li key={curItem.product_id}>
                                <a href="#" className="remove" onClick={() => {
                                  showToast2('remove', curItem);
                                  props.removeProductHandler({ product_id: curItem.product_id, quantity: curItem.quantity, mrp: curItem.mrp })
                                }} title="Remove this item"><i className="fa fa-remove"></i></a>
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

                        <a className="btn animate">
                          {(() => {

                            if (props.data.totalAmount > 0) {

                              return (
                                <Link to='/checkout'>CheckOut</Link>
                              )

                            } else {

                              return (
                                <Link to='#' onClick={() => {
                                  showToast2('cartEmpty', 'none');
                                }}  >CheckOut</Link>
                              )
                            }

                          })()}

                        </a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-lg-3">
                  <div className="all-category">

                    <h3 className="cat-heading">
                      <i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES
                    </h3>

                  </div>
                </div>

                <div className="col-lg-9 col-12">
                  <div className="menu-area">
                    <nav className="navbar navbar-expand-lg">
                      <div className="navbar-collapse">
                        <div className="nav-inner">
                          <ul className="nav main-menu menu navbar-nav">

                            <li className="">
                              <Link to='/'>Home</Link>
                            </li>

                            <li>
                              <Link to='/product'>Product</Link>
                            </li>

                            <li>

                              <a>Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
                              <ul className="dropdown">

                                <li>

                                  {(() => {

                                    if (props.data.cartItems.length > 0) {
                                      return (
                                        <Link to='/cart'>Cart</Link>
                                      )
                                    } else {
                                      return (
                                        <Link to='#' onClick={() => {
                                          showToast2('cartEmpty', 'none');
                                        }} >Cart</Link>
                                      )
                                    }

                                  })()}


                                </li>

                                <li>
                                  {(() => {

                                    if (props.data.cartItems.length > 0) {
                                      return (
                                        <Link to='/checkout'>CheckOut</Link>
                                      )
                                    } else {
                                      return (
                                        <Link to='#' onClick={() => {
                                          showToast2('cartEmpty', 'none');
                                        }}  >CheckOut</Link>
                                      )
                                    }

                                  })()}

                                </li>
                              </ul>
                            </li>

                            <li>

                              <Link to='/contact'>Contact</Link>

                            </li>

                          </ul>
                        </div>
                      </div>
                    </nav>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </header>

    </div>
  );

}

export default Header;
