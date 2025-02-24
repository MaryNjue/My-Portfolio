import React from 'react'
import './Navbar.css'
/*import {link} from 'react-scroll'*/
const Navbar = () => {
    return(
        <nav className = "navbar">
            <div className = "logo">
                <h2>MaryNjue</h2>
                </div>
            <ul>
                <li><a href="#home">HOME</a></li>
               <li><a href="#about">ABOUT</a></li>
                 <li><a href="#skills">SKILLS</a></li>
                 <li><a href="#projects">PROJECT</a></li>
                 <li><a href="#contact">CONTACT</a></li>
            </ul>
            <button className="navbtn"> Contact Me!</button>
           
        </nav>
    )
}
export default Navbar;