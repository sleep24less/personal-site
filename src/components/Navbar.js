import React from "react"
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import DropdownItem from "./DropdownItem"


export default function Navbar(props) {

    const [open, setOpen] = React.useState(false)

    function handleChange(e) {
        if (e.target.checked) {
            document.querySelector(':root').classList.add('dark');
        }
        else {
            document.querySelector(':root').classList.remove('dark');
        }
    }

    return (
        <nav className="container navbar">
            <Link to="/" className="navbar_logo"><img src={logo} alt="website logo"></img></Link>
            <ul className="navbar_list">
                <Link to="/" className="navbar_item">Home</Link>
                <Link to="/work" className="navbar_item">Work</Link>
                <Link to="/about" className="navbar_item">About</Link>
                <div className="menu_container">
                    <li
                        className="navbar_item menu_trigger"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}>
                        Contacts</li>
                    <div
                        className={`dropdown ${open ? 'active' : 'inactive'}`} onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}>

                        <DropdownItem icon={<i className="contact_icon fa-brands fa-linkedin" ></i>} link='https://www.linkedin.com/in/arnomanukian/' />
                        <DropdownItem icon={<i className="contact_icon fa-brands fa-square-github" ></i>} link='https://github.com/sleep24less' />
                        <DropdownItem icon={<i className="contact_icon fa-solid fa-square-envelope" ></i>} link='mailto:arnas.manucan@gmail.com' />
                    </div>
                </div >
            </ul >
            <label className="switch">
                <input type="checkbox" onChange={(e) => handleChange(e)}></input>
                <span className="slider"></span>
            </label >
        </nav >
    )
}
