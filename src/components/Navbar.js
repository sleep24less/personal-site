import React from "react"
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import DropdownItem from "./DropdownItem"


export default function Navbar(props) {

    const [open, setOpen] = React.useState(false)

    return (
        <nav className="container navbar">
            <Link to="/" className="navbar_logo"><img src={logo} alt="website logo"></img></Link>
            <ul className="navbar_list">
                <Link to="/" className="navbar_item">Home</Link>
                <Link to="/work" className="navbar_item">Work</Link>
                <Link to="/about" className="navbar_item">About</Link>
                <div className="menu_container">
                    <li className="navbar_item menu_trigger" onClick={() => { setOpen(!open) }}>Contacts</li>
                    <div className={`dropdown ${open ? 'active' : 'inactive'}`}>
                        <DropdownItem icon={<i class="contact_icon fa-brands fa-linkedin"></i>} link='https://www.linkedin.com/in/arnomanukian/' />
                        <DropdownItem icon={<i class="contact_icon fa-brands fa-square-github"></i>} link='https://github.com/sleep24less' />
                        <DropdownItem icon={<i class="contact_icon fa-solid fa-square-envelope"></i>} link='mailto:arnas.manucan@gmail.com' email={true} />
                    </div>
                </div>
            </ul>
        </nav>
    )
}
