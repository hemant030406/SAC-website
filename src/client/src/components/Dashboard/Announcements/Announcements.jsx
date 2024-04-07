import React from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'
import AnncmtComponent from './AnncmtComponent'

const Announcements = () => {
    return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='announce' />
            </div>
            <div className='d-flex justify-content-center' style={{width:'calc(100% - 42rem)'}}>
            <div className='ml-2' style={{maxWidth: '45rem', width: 'auto', margin: '3rem 1rem', textAlign: 'justify' }}>
                <div className='anncHead'>
                    <h1>Announcements</h1>
                </div>
                <div className="anncCont container ">
                    <AnncmtComponent clubName='CLUB NAME' time='3 hrs ago' eventTitle='Announcement/Event Title' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.'/>
                    <AnncmtComponent clubName='CLUB NAME' time='2 hrs ago' eventTitle='Announcement/Event Title' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.'/>
                    <AnncmtComponent clubName='CLUB NAME' time='2 hrs ago' eventTitle='Announcement/Event Title' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.'/>
                    <AnncmtComponent clubName='CLUB NAME' time='1 hrs ago' eventTitle='Announcement/Event Title' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.'/>
                </div>
            </div>
            </div>
            <div style={{ width: '22rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default Announcements
