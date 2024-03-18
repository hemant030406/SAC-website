import React from 'react';
import LayoutLeft from '../../Layout/LayoutLeft/LayoutLeft';
import LayoutRight from '../../Layout/LayoutRight/LayoutRight';
import StaticDataComponent from './StaticDataComponent';

const StaticData = () => {
  return (
    <div className='d-flex flex-row'>
      <div style={{ width: '20rem' }}>
        <LayoutLeft ele='static' />
      </div>
      <div className='' style={{ width: 'auto', margin: '3rem 1rem', textAlign: 'justify'}}>
        <div className='staticDataHead' style={{marginLeft: '4rem'}}>
          <h1>Static Data</h1>
        </div>
        <div className="staticDataContainer container">
    
          <div className="anncCont mt-5">
            <StaticDataComponent heading="Institute Transportation" overview="..." content="https://www.iitpkd.ac.in/sites/default/files/2023-10/0bccadb4-d451-48d6-8eb8-265fa44dc7d3.pdf" />
          </div>
          
          <div className="anncCont mt-5">
            <StaticDataComponent heading="Mess Menu" overview="..." content="src/components/Dashboard/More/StaticData/Mess Menu and Timings IIT Palakkad.pdf" />
          </div>
          
          <div className="anncCont mt-5">
            <StaticDataComponent heading="Academic Calender" overview="..." content="https://www.iitpkd.ac.in/sites/default/files/2023-10/0bccadb4-d451-48d6-8eb8-265fa44dc7d3.pdf" />
          </div>
          
          <div className="anncCont mt-5">
            <StaticDataComponent heading="Institute Holiday" overview="..."content="/path/to/holiday.pdf" />
          </div>
        </div>
      </div>
      <div style={{ width: '20rem' }}>
        <LayoutRight />
      </div>
    </div>
  );
}

export default StaticData;

