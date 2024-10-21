import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [burgerActive, setBurgerActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(!burgerActive);
    };

    const handleLinkClick = () => {
        setBurgerActive(false);
    };

    useEffect(() => {
        const navbarMenu = document.getElementById("menu");
        const burgerMenu = document.getElementById("burger");

        if (burgerMenu && navbarMenu) {
            burgerMenu.addEventListener("click", handleBurgerClick);
        }

        document.querySelectorAll(".menu-link").forEach((link) => {
            link.addEventListener("click", handleLinkClick);
        });

        const handleScroll = () => {
            if (window.scrollY >= 85) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            if (burgerMenu && navbarMenu) {
                burgerMenu.removeEventListener("click", handleBurgerClick);
            }
            document.querySelectorAll(".menu-link").forEach((link) => {
                link.removeEventListener("click", handleLinkClick);
            });
            window.removeEventListener("scroll", handleScroll);
        };
    }, [burgerActive, handleBurgerClick]);

    return (
        <header className={`header ${scrolling ? 'on-scroll' : ''}`} id="header">
            <nav className="navbar container">
                <Link to="/">
                    <img src={scrolling ? "./Logo(Normal).svg" : "./Logo(Light).svg"}
                         alt="" className="nav-brand"/>
                </Link>
                <div className={`burger ${burgerActive ? 'is-active' : ''}`} id="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className={`menu ${burgerActive ? 'is-active' : ''}`} id="menu">
                    <ul className="menu-inner">
                        <Link to="/about" className="menu-link">
                            <li className="menu-item">
                                About
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                        <Link to="/service" className="menu-link">
                            <li className="menu-item">
                                Programs Offered
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                        <Link to="/university" className="menu-link">
                            <li className="menu-item">
                                Connected University
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                    </ul>
                </div>
                {/* <Link to="/contact"> */}
                <a href="https://forms.gle/bgnWWtsRRM5EuA569" target="_blank" rel="noreferrer">
                    <button className={`btn nav-btn ${scrolling ? 'on-scroll' : ''}`}>
                        Contact Us
                    </button>
                    </a>
                {/* </Link> */}
            </nav>
        </header>
    );
}

export default NavBar;