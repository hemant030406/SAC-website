import React, { useState } from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'
import { FaPlus } from "react-icons/fa";
import OpportunityCard from './OpportunityCard';
import NewProject from './NewProject';

const Opportunities = () => {
    const completedprojects = [
        {
            clubName : "CLUB NAME",
            time : '3 hrs ago' ,
            eventTitle : 'Project/Opportunity Title' ,
            content : 'Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.',
            status : 'Completed',
            Skill1 : "Python",
            Skill2 : "JavaScpt"

        },
        {
            clubName : "CLUB NAME",
            time : '3 hrs ago' ,
            eventTitle : 'Project/Opportunity Title' ,
            content : 'Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.',
            status : 'Completed',
            Skill1 : "Python",
            Skill2 : "JavaScpt"
        },
        {
            clubName : "CLUB NAME",
            time : '3 hrs ago' ,
            eventTitle : 'Project/Opportunity Title' ,
            content : 'Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.',
            status : 'Completed',
            Skill1 : "Python",
            Skill2 : "JavaScpt"
        }
    ]
    const ongoingprojects = [
        {
            clubName : "CLUB NAME",
            time : '3 hrs ago' ,
            eventTitle : 'Project/Opportunity Title' ,
            content : 'Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.',
            status : 'Ongoing',
            Skill1 : "Python",
            Skill2 : "JavaScpt"

        },
        {
            clubName : "CLUB NAME",
            time : '3 hrs ago' ,
            eventTitle : 'Project/Opportunity Title' ,
            content : 'Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.',
            status : 'Ongoing',
            Skill1 : "Python",
            Skill2 : "JavaScpt"
        },
        {
            clubName : "CLUB NAME",
            time : '3 hrs ago' ,
            eventTitle : 'Project/Opportunity Title' ,
            content : 'Announcement/Event description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem rem unde non aut perspiciatis in, facilis possimus distinctio labore consequatur quas quibusdam? Ut blanditiis possimus itaque voluptas ea sapiente.',
            status : 'Ongoing',
            Skill1 : "Python",
            Skill2 : "JavaScpt"
        }
    ]
    const [option , setoption] = useState("none")
    const [task,settask] = useState('All')
    const [newproject , setnewproject] = useState(false)
    const projectform = () => {
        if (newproject === false){
            setnewproject(true);
        }
        else{
            setnewproject(false)
        }
    }
    const TaskChange1 = ()=>{
        settask('All');
        document.querySelector(".taskoptions").style.display = "none"
        setoption("none");
    }
    const TaskChange2=()=>{
        settask('Completed');
        document.querySelector(".taskoptions").style.display = "none"
        setoption("none");
    }
    const TaskChange3= ()=>{
        settask('Ongoing');
        document.querySelector(".taskoptions").style.display = "none"
        setoption("none");
    }
    const menuoptions = ()=>{
        if (option==="none"){
            document.querySelector(".taskoptions").style.display = "inline-block"
            setoption("inline");
            document.querySelector(".taskoptions").style.position ="absolute";
        }
        else{
            document.querySelector(".taskoptions").style.display = "none"
            setoption("none");
        }
    }
  return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='oppor' />
            </div>
            <div className='container' style={{ width:'46rem', height:"auto" , margin: '3rem 1rem', textAlign: 'justify' }}>
                <div className='container'>
                    <h1>Opportunities / Projects
                        {newproject && <button onClick={projectform} style={{border:"none" , backgroundColor:"white"}}>&lt;</button>}
                    </h1>
                </div>
                {!newproject && <div className=''>
                <nav className="navbar d-flex flex-row mt-5" style={{ backgroundColor:"rgb(250 199 170)"}}>
                <div className="d-flex flex-row justify-content-center align-items-center mx-2" onClick={menuoptions} style={{ width:"10rem" , fontSize:"1.2rem"}}>
                    <div className="compname">{task}</div>
                    <button className="navbar-toggler mx-1" type="button" style={{border:"none" , boxShadow:"none"}}>
                    <div className="navbar-toggler-icon"></div>
                    </button>
                </div>
                <div className='mx-5'>
                    <button type="button" onClick={projectform} className="btn" style={{backgroundColor: 'rgb(243 130 33) ', color:"white" , fontSize:"1rem" , border:"none"}}>
                        <FaPlus /> New Project
                    </button>
                </div>
                </nav>
                <div className="taskoptions" style={{display:"none" , backgroundColor:"white"}}>
                <div className="d-flex flex-column" style={{border:"2px solid grey" , display:"inline-block" , font:"23px solid black"}}>
                    <button type="button" onClick={TaskChange3} className="btn " style={{width:"10rem" , border:"none" , textAlign:"left"}}>Ongoing</button>
                    <button type="button" onClick={TaskChange1} className="btn " style={{width:"10rem" , border:"none" , textAlign:"left"}}>All</button>
                    <button type="button" onClick={TaskChange2} className="btn " style={{width:"10rem" , border:"none" , textAlign:"left"}}>Completed</button>
                </div>
                </div>
                <div className="container" style={{position:"relative" , zIndex:"-1"}}>
                    {(task==="All" || task==="Ongoing")  && ongoingprojects.map((element, index) => (
                        <OpportunityCard clubName={element.clubName} time={element.time} eventTitle={element.eventTitle} content={element.content} status={element.status} Skill1={element.Skill1} Skill2={element.Skill2}/>
                    ))}
                    {(task==="All" || task==="Completed")  && completedprojects.map((element, index) => (
                        <OpportunityCard clubName={element.clubName} time={element.time} eventTitle={element.eventTitle} content={element.content} status={element.status} Skill1={element.Skill1} Skill2={element.Skill2}/>
                    ))}
                </div>
                </div>}
                {newproject && <NewProject newproject={newproject} projectform={projectform} ongoingprojects={ongoingprojects}/>}
            </div>
            <div style={{ width: '20rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default Opportunities
