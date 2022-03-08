import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Accounts App</Link>
            <ul className="navbar-nav ms-auto">
                <NavLink to="/" className={ (navData) => navData.isActive ? `${"activeLink"} nav-link` :"nav-link" }>Accounts</NavLink>
                <NavLink to="/add" className={ (navData) => navData.isActive ? `${"activeLink"} nav-link` :"nav-link" }>Add Account</NavLink>
                <NavLink to="/edit" className={ (navData) => navData.isActive ? `${"activeLink"} nav-link` :"nav-link" }>Edit/Delete</NavLink>
            </ul>
        </nav>
    )
}

export default Header;