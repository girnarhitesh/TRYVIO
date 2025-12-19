import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import  NavigationData  from './NavigationData';
import "./Navigation.css";


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isHome = location.pathname === "/";

    return (
        <div className={`navigation ${isHome ? 'transparent' : 'solid'}`}>
            <div className="navigation-container">
                <Link to="/">
                    <div className="navigation-logo">
                        <h1>TRYVIO</h1>
                    </div>
                </Link>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navigation-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {NavigationData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} onClick={closeMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
             <div
                    className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={closeMenu}
                />
        </div>
    );
};

export default Navigation;
