import React from 'react'
import './Calendar.css'

const Calendar = () => {
  return (
    <div className='cal d-flex flex-column mt-5 mb-5'>
    <div className='calTitdiv d-flex justify-content-end'>
      <h1 className='calHead position-relative d-inline-block pb-4'>Calendar</h1>
    </div>
      <div className='calcont d-flex mt-4'></div>
    </div>
  )
}

export default Calendar
