import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/main.css'
import Nav from './components/Home/Navbar/Nav';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';\
import Landing from './components/Landing_Page/LandingPage'
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [duration,setDuration] = useState(true)
  useEffect(
    () => {
      setTimeout(() => {
        setDuration(false);
      },3000);
    },[]
  )

  return (
    // <div className='container btn' > Hello world </div>
    <Router>
    {/* <Nav/> */}
    <Routes>
    <Route exact path = '/' element = {<Home/>}/>
    <Route exact path = '/dashboard' element = {<Dashboard/>}/>
    </Routes>
    <Router>
      <Routes> 
        <Route 
          path = "/" element={
            duration ? <Landing/>:
            <>
            <Nav/>
            <Home/>
            </>
            }
        />
        <Route path="/login" element={
            <Login/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
