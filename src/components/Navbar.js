import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar_logo"><img src={logo} alt="website logo"></img></Link>
            <ul className="navbar_list">
                <Link to="/" className="navbar_item">Home</Link>
                <Link to="/work" className="navbar_item">Work</Link>
                <Link to="/about" className="navbar_item">About</Link>
                <Link to="/contact" className="navbar_item">Contact</Link>
            </ul>
        </nav>
    )
}