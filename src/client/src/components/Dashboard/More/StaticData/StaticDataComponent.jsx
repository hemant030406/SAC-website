import React from 'react';



export default function StaticDataComponent(props) {
    return (
    <div className="container mt-5">
      <div className="card lgcard border-0" style={{ borderColor: 'rgb(250, 199, 170)' }}>
        <div className="row" style={{ marginLeft: '25px', backgroundColor: '#ffffff', border: '40px solid rgb(250, 199, 170)', display: 'flex', alignItems: 'stretch', height: '300px', width: '1000px' }}>
        <div className="container d-flex flex-row my-3">
        <div className="container d-flex flex-column" style={{ paddingTop: '1rem' }}>
          <div className="clubName container d-flex align-items-center m-0 gap-5" style={{position:'absolute', top: '0px', left: '60px', padding: '0.5rem'}}>
            <p><strong>{props.heading}</strong></p>
          </div>        
          <div className="container m-0">
            <a href={props.content}>pdf </a>
            <p>{props.overview}</p>
          </div>

        </div>
        </div>
        </div>
      </div>
    </div>
    );
}
