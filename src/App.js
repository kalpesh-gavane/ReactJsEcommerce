import React from 'react';
import './index.css';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';

const App = (type) => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
