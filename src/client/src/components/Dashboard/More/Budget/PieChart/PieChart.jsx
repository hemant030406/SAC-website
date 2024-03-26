import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Data for the pie chart
  const color_cors = {
    'Red': 'Travel',
    'Blue': 'Merch',
    'Yellow': 'Workshop'
  }
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 100, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h4>Your Spending Summary</h4>
      <div className='d-flex justify-content-center'>
      <div style={{width:'12rem',height:'12rem'}}>
        <Pie data={data} />
      </div>
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-center' style={{padding:'1rem 0rem',gap:'2rem'}}>
        {data.labels.map((clr) => (
          <div className='d-flex flex-row align-items-center gap-2'>
            <div style={{ width: '1rem', height: '1rem',borderRadius:'50%',backgroundColor:clr.toLowerCase()}}>
            </div>
            <div><p style={{margin:'0'}}>{color_cors[clr]}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
