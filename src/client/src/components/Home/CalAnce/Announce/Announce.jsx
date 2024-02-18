import React from 'react'
import './Announce.css'

const Announce = () => {
  return (
    <div className='announce d-flex flex-column mt-5 mb-5'>
    <div className='annTitdiv'>
      <h1 className='annHead position-relative d-inline-block pb-4'>Announcements</h1>
    </div>
      <ul className='annList mt-4'>
      <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic est voluptates sequi expedita itaque!</span></li>
      <li><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, doloremque. Omnis delectus dolores cum aliquid!</span></li>
      <li><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, doloremque. Omnis delectus dolores cum aliquid!</span></li>
      <li><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, doloremque. Omnis delectus dolores cum aliquid!</span></li>
      </ul>
    </div>
  )
}

export default Announce
