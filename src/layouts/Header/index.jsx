
import { NavLink } from "react-router-dom";
import React from 'react';
import "./index.css"

const Header = () => {

    const linkIsActive = (isActive) => {
        return isActive ? 'nav-link active' : 'nav-link'
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid">
                    <NavLink
                        to="/"
                        className="navbar-brand"
                    >
                        Spotify Web Api
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => linkIsActive(isActive)}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/artistas"
                                    className={({ isActive }) => linkIsActive(isActive)}
                                >
                                    Búsqueda
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
