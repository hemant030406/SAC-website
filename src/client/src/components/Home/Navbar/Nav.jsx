import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:'10rem'}}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse order-1" id="navbarText">
                        <span class="navbar-text active" style={{color:'black',fontSize:'200%',paddingLeft:'5rem'}}>
                            Student Affairs Council
                            <p style={{fontSize:'50%'}}>Indian Institute of Technology Palakkad</p>
                        </span>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 order-0" style={{paddingRight:'5rem'}}>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" href="#">About Us</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" href="#">Councils</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" href="#">Announcements</a>
                            </li>
                            <li class="nav-item mx-4">
                                <Link class="nav-link active" to="/login">SIGN IN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
