import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobile = () => setMobileOpen(!mobileOpen);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__container container">
                <Link to="/" className="navbar__logo" id="logo">
                    <img src="/logo.png" alt="ProntoCasa" className="navbar__logo-img" />
                </Link>

                <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`} id="nav-links">
                    <li><a href="#services" onClick={() => setMobileOpen(false)}>Servizi</a></li>
                    <li><a href="#how-it-works" onClick={() => setMobileOpen(false)}>Come Funziona</a></li>
                    <li><a href="#professionals" onClick={() => setMobileOpen(false)}>Professionisti</a></li>
                    <li><a href="#about" onClick={() => setMobileOpen(false)}>Chi Siamo</a></li>
                </ul>

                <a href="#download" className="navbar__cta" id="nav-download-btn">
                    Scarica l'App
                </a>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--active' : ''}`}
                    onClick={toggleMobile}
                    aria-label="Apri menu"
                    id="hamburger-btn"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {mobileOpen && (
                <div className="navbar__mobile-overlay" onClick={() => setMobileOpen(false)} />
            )}
        </nav>
    );
}
