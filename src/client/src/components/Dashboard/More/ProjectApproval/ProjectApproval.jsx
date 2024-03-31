import React from 'react'
import LayoutLeft from '../../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../../Layout/LayoutRight/LayoutRight'
import { Profiler } from 'react'
import ProjectApproveComponent from './ProjectApproveComponent'
// import LiveEventComponent from './LiveEventComponent'

const ProjectApproval = () => {
  return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='' />
            </div>
            <div className='' style={{ width: '43rem', margin: '3rem 1rem', textAlign: 'justify'}}>
                <div className='projecthead'>
                    <h1>Project Approval</h1>
                </div>
                <div className="projectapprovecont container">
                <ProjectApproveComponent clubName='CLUB NAME' name='NAME' member_num='10' time='3 hrs ago' date='14 March' venue='Common Room' Skill1='Skill 1' Skill2='Skill 2' eventTitle='Project/Opportunity Title' content='Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore. '/>
                <ProjectApproveComponent clubName='CLUB NAME' name='NAME' member_num='10' time='3 hrs ago' date='14 March' venue='Common Room' Skill1='Skill 1' Skill2='Skill 2' eventTitle='Project/Opportunity Title' content='Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore. '/>

                </div>
            </div>
            <div style={{ width: '22rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default ProjectApproval
