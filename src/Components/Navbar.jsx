import React, { Component } from 'react'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
                <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Skills</a>
                <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Projects</a> 
                <a href="/course"><i className="fa fa-fw fa-envelope"></i>Course</a>
                <a href="/reduxcontact"><i className="fa fa-fw fa-envelope"></i>Contact us</a>
                <a href="/"><i className="fa fa-fw fa-envelope"></i>Logout</a>
            </nav>
        )
    }
}

export default Navbar
