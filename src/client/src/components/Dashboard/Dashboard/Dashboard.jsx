import React from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'
import Post from './Post/Post'
import { Link } from 'react-router-dom'
import Clubcard from './Clubcard/Clubcard'
import { BiSolidBookReader } from "react-icons/bi";

const Dashboard = () => {
    return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='dashboard' />
            </div>
            <div className='d-flex justify-content-center' style={{ width: 'calc(100% - 42rem)' }}>
                <div className='container' style={{ width: '45rem', margin: '3rem 4rem', textAlign: 'justify' }}>

                    <div className='container'>
                        <h1>Dashboard</h1>
                    </div>

                    <div className="container my-5" style={{ border: "2px solid #ced4da", borderRadius: "10px" }}>
                        <div className='container my-3'>
                            <h3 style={{ display: "inline" }}>Announcements</h3>
                            <Link to="/announcements">
                                <button type="button" className="btn btn-primary" style={{ backgroundColor: 'rgb(243 130 33) ', borderStyle: 'none', color: "white", float: 'right' }}>View All</button>
                            </Link>
                        </div>

                        <Post img="iitlogo.jpg" heading="Lorem ipsum dolor sit amet " time="1 day ago" />
                        <Post img="iitlogo.jpg" heading="Lorem ipsum dolor sit amet " time="2 days ago" />
                        <Post img="iitlogo.jpg" heading="Lorem ipsum dolor sit amet " time="3 days ago" />
                        <Post img="iitlogo.jpg" heading="Lorem ipsum dolor sit amet " time="4 days ago" />

                    </div>


                    <div className="container my-5" >
                        <div>
                            <h3>Status</h3>
                        </div>
                        <div className="container d-flex flex-row my-3" style={{ border: "2px solid #ced4da", borderRadius: "10px" }}>
                            <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                <div>
                                    <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                </div>
                                <div>
                                    5 Clubs
                                </div>
                            </div>
                            <div className='vr my-3 mx-3' style={{ border: "1px solid" }}></div>
                            <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                <div>
                                    <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                </div>
                                <div>
                                    10 Events
                                </div>
                            </div>
                            <div className='vr my-3 mx-3' style={{ border: "1px solid" }}></div>
                            <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                <div className="mt-4">
                                    <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    2 Ongoing projects
                                </div>
                            </div>
                            <div className='vr my-3 mx-3' style={{ border: "1px solid" }}></div>
                            <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                <div className='mt-4'>
                                    <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    2 hours learning
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex flex-column container my-5' >
                        <div className='container'>
                            <h3>My Clubs</h3>
                        </div>
                        <div className='container row flex-row flex-nowrap overflow-auto'>
                            <Clubcard />
                            <Clubcard />
                            <Clubcard />
                            <Clubcard />
                            <Clubcard />
                            <Clubcard />
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ width: '20rem' }}>
                <LayoutRight />
            </div>

        </div>
    )
}

export default Dashboard
