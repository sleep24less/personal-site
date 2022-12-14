import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import DropdownItem from './DropdownItem'

// DON'T FORGET TO ADD SCROLL TO TOP FEATURE ON LINKS INSIDE TEXT OR FOOTER//

function Footer() {
    return (
        <footer className='container footer'>
            <div className='footer_top'>
                <Link to="/" className="footer_logo"><img src={logo} alt="website logo"></img></Link>
                <div className='footer_list'>
                    <Link to="/" className="navbar_item">Home</Link>
                    <Link to="/work" className="navbar_item">Work</Link>
                    <Link to="/about" className="navbar_item">About</Link>
                </div>
                <div className='footer_icons'>
                    <DropdownItem icon={<i className="contact_icon fa-brands fa-linkedin" ></i>} link='https://www.linkedin.com/in/arnomanukian/' />
                    <DropdownItem icon={<i className="contact_icon fa-brands fa-square-github" ></i>} link='https://github.com/sleep24less' />
                    <DropdownItem icon={<i className="contact_icon fa-solid fa-square-envelope" ></i>} link='mailto:arnas.manucan@gmail.com' />
                </div>
            </div>
            <div className='footer_bottom'>
                <p>Copyright @ {(new Date().getFullYear())} Arno Manukian
                </p>
                <a href="https://github.com/rektjesus" target="_blank" rel='noreferrer'>
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </footer >
    )
}

export default Footer