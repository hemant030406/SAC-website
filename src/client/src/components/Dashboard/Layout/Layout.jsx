import React from 'react'
import { FaHome, FaRegCalendar } from 'react-icons/fa'
import { HiAnnotation, HiDotsHorizontal } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { GiAerialSignal } from "react-icons/gi";
import './Layout.css'
import ActCard from './ActCard/ActCard';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    let bclrdash = 'rgb(250 199 170)';
    let bclrannounce = 'rgb(250 199 170)';
    let bclrclubs = 'rgb(250 199 170)';
    let bclrcalendar = 'rgb(250 199 170)';
    let bclrlive = 'rgb(250 199 170)';
    let bclropportunities = 'rgb(250 199 170)';
    let bclrmore = 'rgb(250 199 170)';

    if (props.ele == 'dashboard') {
        bclrdash = 'rgb(243 130 33)'
    }
    else if (props.ele == 'announce') {
        bclrannounce = 'rgb(243 130 33)'
    }
    else if (props.ele == 'clubs') {
        bclrclubs = 'rgb(243 130 33)'
    }
    else if (props.ele == 'cal') {
        bclrcalendar = 'rgb(243 130 33)'
    }
    else if (props.ele == 'live') {
        bclrlive = 'rgb(243 130 33)'
    }
    else if (props.ele == 'oppor') {
        bclropportunities = 'rgb(243 130 33)'
    }
    else if (props.ele == 'more') {
        bclrmore = 'rgb(243 130 33)'
    }

    return (
        <div>
            <div className='left d-inline-flex flex-column' style={{ width: '23rem' }}>

                <div id="navbarText" style={{ marginTop: '3rem', paddingBottom: '2rem', width: 'inherit' }}>

                    <span class="navbar-text active" style={{ color: 'black', fontSize: '155%', paddingLeft: '5rem' }}>
                        Student Affairs Council
                        <p style={{ fontSize: '58%', paddingLeft: '5rem' }}>
                            Indian Institute of Technology Palakkad
                        </p>
                    </span>

                </div>

                <div className='d-inline-flex' style={{ backgroundColor: 'rgb(250 199 170)', width: 'inherit' }}>

                    <ul className='nav flex-column' style={{ width: 'inherit', paddingLeft: '0rem' }}>

                        <Link className="dropdown-item" to="/dashboard">
                            <li className='dashboard lylist lylistmid nav-item' style={{ backgroundColor: `${bclrdash}` }}>
                                <FaHome size={35} style={{ margin: '0rem 0.8rem' }} />
                                Dashboard
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/clubs">
                            <li className='clubs lylist lylistmid nav-item' style={{ backgroundColor: `${bclrclubs}` }}>
                                <IoPeopleSharp size={35} style={{ margin: '0rem 0.8rem' }} />
                                Clubs
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/announcements">
                            <li className='Announcements lylist lylistmid nav-item' style={{ backgroundColor: `${bclrannounce}` }}>
                                <HiAnnotation size={35} style={{ margin: '0rem 0.8rem' }} />
                                Announcements
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/calendar" >
                            <li className='calendar lylist lylistmid nav-item' style={{ backgroundColor: `${bclrcalendar}` }}>
                                <FaRegCalendar size={35} style={{ margin: '0rem 0.8rem' }} />
                                Calendar
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/live-events">
                            <li className='live-events lylist lylistmid nav-item' style={{ backgroundColor: `${bclrlive}` }}>
                                <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
                                Live Events
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/opportunities">
                            <li className='opporunities lylist lylistmid nav-item' style={{ backgroundColor: `${bclropportunities}` }}>
                                <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
                                Opportunities
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/more">
                            <li className='more lylist nav-item' style={{ backgroundColor: `${bclrmore}` }}>
                                <HiDotsHorizontal size={35} style={{ margin: '0rem 0.8rem' }} />
                                More
                            </li>
                        </Link>

                    </ul>

                </div>

            </div>

            <div className="right d-flex flex-column" style={{ float: 'right', marginRight: '6rem', width: '20rem', marginTop: '3rem' }}>
                <div className='d-flex flex-row flex-end' style={{justifyContent:'flex-end'}}>
                    <div className='d-flex' style={{ fontSize: '150%',marginRight:'1rem',alignItems:'center',justifyContent:'center',fontWeight:'bold' }}>UserName</div>
                    <div>
                        <img src="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" class="rounded-circle" alt="..." style={{ width: '4rem', height: '4rem' }} />
                    </div>
                </div>
                <div style={{marginTop:'2rem'}}>
                    <h3>Activity</h3>
                    <ActCard imgUrl="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name='Name' club='YACC' content='Lorem ipsum dolor...' />
                    <ActCard imgUrl="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name='Name' club='YACC' content='Lorem ipsum dolor...' />
                    <ActCard imgUrl="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name='Name' club='YACC' content='Lorem ipsum dolor...' />
                    <ActCard imgUrl="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name='Name' club='YACC' content='Lorem ipsum dolor...' />
                    <ActCard imgUrl="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name='Name' club='YACC' content='Lorem ipsum dolor...' />
                </div>
            </div>
        </div>
    )
}

export default Layout
