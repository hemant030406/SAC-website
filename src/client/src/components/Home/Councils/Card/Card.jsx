import React from 'react'

const Card = (props) => {
  return (
    <div className="card crd" style={{width:'22rem',height:'20rem',margin:'2rem 1.5rem 0rem'}}>
      <img src={props.imgUrl} class="card-img-top crdimg" alt="..." style={{width:'22rem',height:'16rem'}} />
      <div class="card-body crdtit">
        <p class="card-text" style={{textAlign:'center',fontSize:'150%'}}>{props.title}</p>
      </div>
    </div>
  )
}

export default Card
