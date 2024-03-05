import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/main.css'
import Nav from './components/Home/Navbar/Nav';
import Home from './components/Home/Home';
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
