import React from 'react';
import LayoutLeft from '../../Layout/LayoutLeft/LayoutLeft';
import LayoutRight from '../../Layout/LayoutRight/LayoutRight';
import StaticDataComponent from './StaticDataComponent';
import StaticDataData from '../../../../data/StaticData_data.json';

const StaticData = () => {
  const { items } = StaticDataData;

  return (
    <div className='d-flex flex-row'>
      <div style={{ width: '20rem' }}>
        <LayoutLeft ele='static' />
      </div>
      <div className='' style={{ width: 'auto', margin: '3rem 1rem', textAlign: 'justify'}}>
        <div className='staticDataHead' style={{marginLeft: '5rem'}}>
          <h1>Static Data</h1>
        </div>
        <div className="staticDataContainer container">
          {items.map(item => (
            <div className="anncCont mt-5" key={item.heading}>
              <StaticDataComponent heading={item.heading} overview={item.overview} link={item.link} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: '20rem' }}>
        <LayoutRight />
      </div>
    </div>
  );
}

export default StaticData;