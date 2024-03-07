import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/main.css'
import Nav from './components/Home/Navbar/Nav';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {

  return (
    // <div className='container btn' > Hello world </div>
    <Router>
    {/* <Nav/> */}
    <Routes>
    <Route exact path = '/' element = {<Home/>}/>
    <Route exact path = '/dashboard' element = {<Dashboard/>}/>
    </Routes>
    </Router>
  );

}

export default App;
