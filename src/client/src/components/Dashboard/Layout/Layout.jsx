import React from 'react'
import { FaHome, FaRegCalendar } from 'react-icons/fa'
import { HiAnnotation, HiDotsHorizontal } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { GiAerialSignal } from "react-icons/gi";
import './Layout.css'
import ActCard from './ActCard/ActCard';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='left d-inline-flex flex-column' style={{ width: '23rem' }}>

                <div id="navbarText" style={{ paddingTop: '3rem', paddingBottom: '2rem', width: 'inherit' }}>

                    <span class="navbar-text active" style={{ color: 'black', fontSize: '155%', paddingLeft: '5rem' }}>
                        Student Affairs Council
                        <p style={{ fontSize: '58%', paddingLeft: '5rem' }}>
                            Indian Institute of Technology Palakkad
                        </p>
                    </span>

                </div>

                <div className='d-inline-flex' style={{ backgroundColor: 'rgb(250 199 170)', width: 'inherit' }}>

                    <ul className='nav flex-column' style={{ width: 'inherit', paddingLeft: '0rem' }}>

                        <li className='lylist nav-item' style={{ backgroundColor: 'rgb(243 130 33)' }}>
                            <Link className="dropdown-item" to="/dashboard">
                                <FaHome size={35} style={{ margin: '0rem 0.8rem' }} />
                                Dashboard
                            </Link>
                        </li>

                        <li className='lylist lylistmid nav-item'>
                            <Link className="dropdown-item" to="/clubs">
                                <IoPeopleSharp size={35} style={{ margin: '0rem 0.8rem' }} />
                                Clubs
                            </Link>
                        </li>

                        <li className='lylist lylistmid nav-item'>
                            <Link className="dropdown-item" to="/announcements">
                                <HiAnnotation size={35} style={{ margin: '0rem 0.8rem' }} />
                                Announcements
                            </Link>
                        </li>

                        <li className='lylist lylistmid nav-item'>
                            <Link className="dropdown-item" to="/calendar">
                                <FaRegCalendar size={35} style={{ margin: '0rem 0.8rem' }} />
                                Calendar
                            </Link>
                        </li>

                        <li className='lylist lylistmid nav-item'>
                            <Link className="dropdown-item" to="/live-events">
                                <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
                                Live Events
                            </Link>
                        </li>

                        <li className='lylist lylistmid nav-item'>
                            <Link className="dropdown-item" to="/opportunities">
                                <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
                                Opportunities
                            </Link>
                        </li>

                        <li className='lylist nav-item'>
                            <Link className="dropdown-item" to="#">
                                <HiDotsHorizontal size={35} style={{ margin: '0rem 0.8rem' }} />
                                More
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

            <div className="right" style={{ float: 'right', marginRight: '6rem', /*border: '2px solid black',*/ width: '20rem',marginTop:'3rem' }}>
                <h3>Activity</h3>
                <ActCard imgUrl = "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name = 'Name' club = 'YACC' content = 'Lorem ipsum dolor...' />
                <ActCard imgUrl = "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name = 'Name' club = 'YACC' content = 'Lorem ipsum dolor...' />
                <ActCard imgUrl = "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name = 'Name' club = 'YACC' content = 'Lorem ipsum dolor...' />
                <ActCard imgUrl = "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name = 'Name' club = 'YACC' content = 'Lorem ipsum dolor...' />
                <ActCard imgUrl = "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" name = 'Name' club = 'YACC' content = 'Lorem ipsum dolor...' />
            </div>

        </div>
    )
}

export default Layout
