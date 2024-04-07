import React from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'
import LiveEventComponent from './LiveEventComponent'

const LiveEvents = () => {
  return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='live' />
            </div>
            <div className='d-flex justify-content-center' style={{width:'calc(100% - 42rem)'}}>
            <div className='' style={{ width: 'auto', margin: '3rem 1rem', textAlign: 'justify'}}>
                <div className='liveHead'>
                    <h1>LiveEvents</h1>
                </div>
                <div className="liveCont container">
                    <LiveEventComponent clubName='CLUB NAME' time='3 hrs ago' date='14 March' venue='Common Room' eventTitle='Live-Event Title' content='Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente. '/>
                    <LiveEventComponent clubName='CLUB NAME' time='3 hrs ago' date='14 March' venue='Common Room' eventTitle='Live-Event Title' content='Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente. '/>
                    <LiveEventComponent clubName='CLUB NAME' time='3 hrs ago' date='14 March' venue='Common Room' eventTitle='Live-Event Title' content='Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente. '/>
                    <LiveEventComponent clubName='CLUB NAME' time='3 hrs ago' date='14 March' venue='Common Room' eventTitle='Live-Event Title' content='Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente. '/>

                </div>
            </div>
            </div>
            <div style={{ width: '20rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default LiveEvents
