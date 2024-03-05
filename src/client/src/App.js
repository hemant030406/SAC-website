import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/main.css'
import Nav from './components/Home/Navbar/Nav';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Landing from './components/Landing_Page/LandingPage'

function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 3000);
  }, []);

  return (
    <>
    {
      !isDisplayed && <>
      <Landing/>
      </>
    }
    {isDisplayed &&
              <>
                <Nav/>
                <Home/>
              </>
    }
    </>
  );
}

export default App;
