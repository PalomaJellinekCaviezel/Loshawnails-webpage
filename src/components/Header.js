import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/LoshawnailsLogo.png'; // Asegúrate de importar tu logo correctamente

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-customBlue min-h-16 flex items-center justify-between px-4 py-2 shadow-md relative z-50">
            <Link to="/" onClick={closeMenu}>
                <img src={logo} alt="Logo Loshawnails" className="h-10 w-auto" />
            </Link>

            <button
                className="block md:hidden text-notBlack"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Mobile Menu */}
            <nav
                className={`fixed inset-0 bg-customBlue flex flex-col items-center justify-center transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:flex md:flex-row md:bg-transparent md:justify-end`}
            >
                <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0">
                    <li><a href="/aboutUs" onClick={closeMenu} className="text-notBlack no-underline py-2 px-2 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Sobre nosotras</a></li>
                    <li><a href="/services" onClick={closeMenu} className="text-notBlack no-underline py-2 px-2 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Nuestros servicios</a></li>
                    <li><a href="/location" onClick={closeMenu} className="text-notBlack no-underline py-2 px-2 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Ubicación</a></li>
                    <li><a href="/contact" onClick={closeMenu} className="text-notBlack no-underline py-2 px-2 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Contáctanos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
