// import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Header = () => {

  return (
    <div>

      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">

              <div className="logo">
                <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
              </div>

              <div className="search-top">
                <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>

                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." name="search" />
                    <button value="search" type="submit"><i className="ti-search"></i></button>
                  </form>
                </div>

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
                    <input name="search" placeholder="Search Products Here....." type="search" />
                    <button className="btnn"><i className="ti-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12" id="cart_component">

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
                          <BrowserRouter>
                              <Link to='/'>Home</Link>
                            </BrowserRouter>
                          </li>
                          <li>
                            <a>Product</a>
                          </li>
                          <li>
                            <a>Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
                            <ul className="dropdown">
                              <li>
                                <a>Cart</a>
                              </li>
                              <li>
                                <a>Checkout</a>
                              </li>
                            </ul>
                          </li>

                          <li>

                            <BrowserRouter>
                              <Link to='/contact'>Contact</Link>
                            </BrowserRouter>
                            
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

    </div>
  );

}

export default Header;
