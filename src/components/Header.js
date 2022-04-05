import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = () => setIsMenuOpen(!isMenuOpen);
    return (
        <header className={`${isMenuOpen ? "menu-open" : ""}`}>
            <Link to="/">
                <img
                    className="header-logo"
                    src={`${process.env.PUBLIC_URL}/images/mm-vacuo-logo.jpg`} 
                    alt="mm-vacuo-logo" 
                    width="15%"    
                />
            </Link>
            {isMobile ? (
                <checkbox>
                    <input id="menu-checkbox" type='checkbox' onClick={handleClick} />
                    <label className="menu" htmlFor="menu-checkbox">≡</label>
                </checkbox>
            ) : <Navigation />}
            {isMenuOpen ? (
                <div className="navigation-container" onClick={handleClick}>
                    <Navigation />
                </div>
            ) : null}
        </header>
    );
}