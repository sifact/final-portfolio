import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Navbar = ({ switchTheme, theme }) => {
    const [toggle, showMenu] = useState(false);
    console.log(switchTheme);
    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    Sifat
                </Link>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a
                                className="nav__link"
                                style={{ cursor: "pointer" }}
                                onClick={() => switchTheme()}
                            >
                                <i className="uil uil-message nav__icon"></i>
                                {theme === "dark" ? "light" : "dark"}
                            </a>
                        </li>
                    </ul>
                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(!toggle)}
                    ></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
