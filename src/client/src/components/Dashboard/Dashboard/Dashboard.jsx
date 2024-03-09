import React from 'react'
import LayoutLeft from '../Layout/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight'

const Dashboard = () => {
    return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='dashboard' />
            </div>
            <div className='' style={{ width: '40rem', margin: '10rem 4rem', textAlign: 'justify'}}>
                <div className='dashHead'>
                    <h1>Dashboard</h1>
                </div>
                <div className="dashCont">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.
                    Non placeat molestiae eos, mollitia doloremque quasi aliquam minus, ea asperiores fugiat, accusantium dolorum obcaecati pariatur id? Mollitia eveniet, repellat deleniti, voluptates optio accusamus natus possimus sapiente dicta quibusdam perferendis.
                    Commodi tempora veritatis ea fuga nam impedit corporis enim amet odio. Non laborum quaerat aliquid praesentium fugit esse eaque ut dolorem, ipsam commodi amet dolor. Quidem laboriosam error dolore ex?
                </div>
            </div>
            <div style={{ width: '20rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default Dashboard
