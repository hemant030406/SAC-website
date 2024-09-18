import React, { useEffect } from 'react'
import { FaHome, FaRegCalendar, FaBars } from 'react-icons/fa'
import { HiAnnotation } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { GiAerialSignal } from "react-icons/gi";
import './LayoutLeft.css'
import { Link } from 'react-router-dom';

const Layout = (props) => {

    const Menu = [
        {
            to: "/dashboard",
            className: "dash-dashboard",
            tag: <FaHome size={35} style={{ margin: '0rem 0.8rem' }} />,
            title: "Dashboard",
            active: props.ele === 'dashboard'
        },
        {
            to: "/clubs",
            className: "dash-clubs",
            tag: <IoPeopleSharp size={35} style={{ margin: '0rem 0.8rem' }} />,
            title: "Clubs",
            active: props.ele === 'clubs'
        },
        {
            to: "/announcements",
            className: "dash-Announcements",
            tag: <HiAnnotation size={35} style={{ margin: '0rem 0.8rem' }} />,
            title: "Announcements",
            active: props.ele === 'announce'
        },
        {
            to: "/calendar",
            className: "dash-calendar",
            tag: <FaRegCalendar size={35} style={{ margin: '0rem 0.8rem' }} />,
            title: "Calendar",
            active: props.ele === 'cal'
        },
        {
            to: "/live-events",
            className: "dash-live-events",
            tag: <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />,
            title: "Live events",
            active: props.ele === 'live'
        },
        {
            to: "/opportunities",
            className: "dash-opportunities",
            tag: <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />,
            title: "Opportunities",
            active: props.ele === 'oppor'
        },
        {
            to: "/static-data",
            className: "dash-more",
            tag: '',
            title: "Static Data",
            active: props.ele === 'statdat'
        },
        {
            to: "/budget-tracking",
            className: "dash-more",
            tag: '',
            title: "Budget Tracking",
            active: props.ele === 'budge'
        },
        {
            to: "/project-approval",
            className: "dash-more",
            tag: '',
            title: "Project Approval",
            active: props.ele === 'proj'
        },
    ]

    let isLeftVis = false;

    const displayLeftMenu = () => {
        if (!isLeftVis) {
            document.querySelector('.dash-left').style.display = 'inline-flex'
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'rgb(250 199 170)'
            lftmnu.style.height = '100%'
            lftmnu.style.width = '20rem'
            isLeftVis = true
        }
        else {
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'white'
            lftmnu.style.height = '5rem'
            lftmnu.style.width = '5rem'
            document.querySelector('.dash-left').style.display = 'none'
            isLeftVis = false
        }
    }

    const changeDisplay = () => {
        if (window.innerWidth < 1440) {
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'white'
            lftmnu.style.height = '5rem'
            lftmnu.style.width = '5rem'
            document.querySelector('.leftHamburg').style.display = 'inline-flex'
            document.querySelector('.dash-left').style.display = 'none'
            document.querySelector('.dash-left').style.marginTop = '1rem'
        } else {
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'white'
            lftmnu.style.height = '100%'
            lftmnu.style.width = '20rem'
            document.querySelector('.leftHamburg').style.display = 'none'
            document.querySelector('.dash-left').style.display = 'inline-flex'
            document.querySelector('.dash-left').style.marginTop = '0rem'
        }
    }

    useEffect(() => {

        changeDisplay()

        let prevWidth = window.innerWidth;

        const handleResize = () => {
            let currwidth = window.innerWidth;

            if (currwidth !== prevWidth) {
                changeDisplay()
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <div className='leftMenu'>
            <div className='leftHamburg' onClick={() => displayLeftMenu()} style={{ position: 'absolute', top: 5, zIndex: '999' }} >
                <FaBars size={40} />
            </div>
            <div className='dash-left'>

                <div className='d-flex flex-row align-items-center' id="navbarText" style={{ paddingBottom: '1rem', width: 'inherit', marginTop: '3rem' }}>

                    <div className='iitlogo' style={{ backgroundImage: 'url(/iitlogo.jpg)' }}>
                    </div>

                    <span class="navbar-text active" style={{ color: 'black', fontSize: '140%' }}>
                        <p style={{ margin: '0' }}>Student Affairs Council</p>
                        <p style={{ fontSize: '58%', color: 'Orange' }}>
                            Indian Institute of Technology Palakkad
                        </p>
                    </span>

                </div>

                <div className='d-inline-flex' style={{ backgroundColor: 'rgb(250 199 170)', width: 'inherit' }}>

                    <ul className='nav flex-column' style={{ width: 'inherit', paddingLeft: '0rem' }}>
                        {
                            Menu.map((menu, index) => (
                                <Link className="dropdown-item" to={menu.to}>
                                    <li className={`${menu.className} lylist lylistmid nav-item ${menu.active ? 'activeBar' : ''}`}>
                                        {menu.tag}
                                        {menu.title}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Layout
