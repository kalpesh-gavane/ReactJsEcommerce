import React from 'react';
import './index.css';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import Cart from './Cart';
import Home from './components/Home';
import About from './components/About';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeContainer />}></Route>
          <Route path='/contact' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
