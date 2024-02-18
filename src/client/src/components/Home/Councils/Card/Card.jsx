import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='container crd d-flex flex-column justify-content-center align-items-center'>
      <div className='crdimg' style={{backgroundImage:`url(${props.imgUrl})`}}></div>
      <div className='crdtit'><p>{props.title}</p></div>
    </div>
  )
}

export default Card
