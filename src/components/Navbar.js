import React from 'react'
import { Link, withRouter } from "react-router-dom";
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">LOGO</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item ">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item ">
                        <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item ">
                        <Link to="/contact" class="nav-link">Contact</Link>
                    </li>
                </ul>
              
        </div>
        </nav>
    )
}

export default withRouter(Navbar);
