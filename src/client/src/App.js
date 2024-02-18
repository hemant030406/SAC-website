import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/main.css'
import Nav from './components/Home/Navbar/Nav';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';

function App() {

  return (
    // <div className='container btn' > Hello world </div>
    <>
    <Nav/>
    <Home/>
    {/* <Footer/> */}
    </>
  );

}

export default App;
