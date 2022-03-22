import React from 'react';
import './index.css';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import MainCart from './components/MainCart';
import Checkout from './components/Checkout';

const App = (type) => {

  return (
    <div>
      <BrowserRouter>
      
        <Header />

        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<CartContainer />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
        
      </BrowserRouter>
    </div>


  );




}

export default App;
