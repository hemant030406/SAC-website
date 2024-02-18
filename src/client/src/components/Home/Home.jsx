import React from 'react'
import Combo from './cal+annou/Combo'
import Aboutus from './Aboutus/Aboutus'
import Councils from './Councils/Councils'
import './home.css'

const Home = () => {
  return (
    <div className='home' style={{overflow:'scroll',zIndex:'1'}}>
    <Combo/>
    <Aboutus/>
    <Councils />
    </div>
  )
}

export default Home
