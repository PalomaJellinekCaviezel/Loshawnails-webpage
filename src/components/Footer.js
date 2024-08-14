import React from 'react';

import { FaWhatsapp, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-customBlue text-notBlack py-4 px-6 flex flex-col items-center">
            <p className="mb-2 text-sm text-center">&copy; 2024 Loshawnails. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-notBlack hover:text-hoverPink">
                    <FaWhatsapp className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-notBlack hover:text-hoverPink">
                    <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.pinterest.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-notBlack hover:text-hoverPink">
                    <FaPinterest className="w-6 h-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
