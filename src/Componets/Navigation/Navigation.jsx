import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import NavigationData from "./NavigationData.jsx";


const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="navigation-container">
                    <Link to="/">
                        <div className="navigation-logo">
                            <h1>TRYVIO</h1>
                        </div>
                    </Link>
                    <nav className="navigation-menu">
                        <ul>
                            {NavigationData.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navigation;