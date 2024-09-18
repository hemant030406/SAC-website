import React from 'react';

const Card = (props) => {
  return (
    <a target='_blank' href={props.linkUrl} style={{textDecoration:'none'}}>
      <div className="card crd" style={{ width: '22rem', height: '20rem', margin: '2rem 1.5rem 0rem' }}>
        <img src={props.imgUrl} className="card-img-top crdimg" alt="..." style={{ width: '22rem', height: '16rem' }} />
        <div className="card-body crdtit">
          <p className="card-text" style={{ textAlign: 'center', fontSize: '150%' }}>{props.title}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
