import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-customBlue min-h-16 flex items-center justify-between px-4 py-2">
            <div>
                <img src=".\LoshawnailsLogo.png" alt="Logo" className="h-10 w-auto" />  {/* Ruta y tamaño de la imagen */}
            </div>
            <button
                className="block md:hidden text-notBlack"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <nav className={`fixed inset-0 bg-customBlue md:static md:flex md:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
                <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0">
                    <li><a href="/about" className="text-notBlack no-underline py-2 px-4 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Somos</a></li>
                    <li><a href="/services" className="text-notBlack no-underline py-2 px-4 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Servicios</a></li>
                    <li><a href="/location" className="text-notBlack no-underline py-2 px-4 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Ubicación</a></li>
                    <li><a href="/contact" className="text-notBlack no-underline py-2 px-4 block text-center hover:bg-hoverPink hover:text-pinkiest hover:rounded-lg">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );

};

export default Header;
