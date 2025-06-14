import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/users" className="navbar-link">User</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
        </nav>
    )
}
