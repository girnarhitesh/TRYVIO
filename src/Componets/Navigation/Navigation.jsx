import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationData from "./NavigationData";
import "./Navigation.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


const Navigation = ({ favoritesCtx, i18nCtx }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isHome = location.pathname === "/";

    return (
        <div className={`navigation ${isHome ? "transparent" : "solid"}`}>
            <div className="navigation-container">
                <Link to="/">
                    <div className="navigation-logo">
                        <h1>TRYVIO</h1>
                        {/* <span className="logo-subtitle">FASHION</span> */}
                    </div>
                </Link>

                <div className="nav-actions">
                    <button
                        className="icon-btn"
                        aria-label={i18nCtx?.t('search')}
                        onClick={() => setIsSearchOpen((v) => !v)}
                    >
                        <FiSearch />
                    </button>
                    {isSearchOpen && (
                        <div className="search-inline">
                            <input
                                type="text"
                                className="search-input"
                                placeholder={i18nCtx?.t('search for products')}
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        navigate(`/favorites?q=${encodeURIComponent(searchValue)}`);
                                        setIsSearchOpen(false);
                                    }
                                }}
                            />
                        </div>
                    )}
                    <button
                        className="icon-btn badge-parent"
                        aria-label={i18nCtx?.t('favorites')}
                        onClick={() => navigate("/favorites")}
                    >
                        <FaHeart />
                        {favoritesCtx?.favorites?.length > 0 && (
                            <span className="badge">{favoritesCtx.favorites.length}</span>
                        )}
                    </button>
                    <button className="icon-btn" aria-label={i18nCtx?.t('cart')}>
                        <FiShoppingCart />
                    </button>
                    <button
                        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="menu-text">{i18nCtx?.t('menu')}</span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>

                <nav className={`navigation-menu ${isMenuOpen ? "active" : ""}`}>
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
                className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
                onClick={closeMenu}
            />
        </div>
    );
};

export default Navigation;
