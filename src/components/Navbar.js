import React from "react"
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'


export default function Navbar(props) {

    // function for dark/light mode toggle //
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
                <a href="https://github.com/sleep24less" target='_blank' rel='noreferrer' className="navbar_item">Github</a>
            </ul >
            <label className="switch">
                <input type="checkbox" onChange={(e) => handleChange(e)}></input>
                <span className="slider"></span>
            </label >
        </nav >
    )
}
