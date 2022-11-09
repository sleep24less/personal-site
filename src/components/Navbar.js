import logo from "../assets/logo.svg"

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar_logo"><img src={logo} alt="website logo"></img></a>
            <ul className="navbar_list">
                <a href="/" className="navbar_item">Home</a>
                <a href="/work" className="navbar_item">Work</a>
                <a href="/about" className="navbar_item">About</a>
                <a href="/contact" className="navbar_item">Contact</a>
            </ul>
        </nav>
    )
}