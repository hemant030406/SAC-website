import React from 'react'
import Announce from './Announcements/Announce'
import Calendar from './Calendar/Calendar'
import './Combo.css'

const combo = () => {
  return (
    <div className='combo container d-flex flex-row flex-wrap justify-content-center'>
    <Announce/>
    <Calendar/>
    </div>
  )
}

export default combo
