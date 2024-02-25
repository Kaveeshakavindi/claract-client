import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route,} from 'react-router-dom';
import Axios from 'axios';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Item from './pages/Item/Item';

function App() {

  //scrollview

  useEffect(() => {
    const handleScroll = (e) => {
      // You can adjust the scroll speed by modifying the `scrollFactor` value
      const scrollFactor = 0.0009;
      window.scroll(0, window.scrollY + e.deltaY * scrollFactor);
    };

    // Add the event listener to the window
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element=
        {<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path={`/item/:id`} element={<Item />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
