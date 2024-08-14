import React from 'react';

import { FaWhatsapp, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-customBlue text-notBlack py-4 px-6 shadow-inner">
            <div className="max-w-3xl mx-auto flex justify-between items-center">
                {/* Contenedor del texto */}
                <p className="text-xs text-left">
                    &copy; 2024 Loshawnails. <br /> Página creada por Paloma Caviezel. Todos los derechos reservados.
                </p>

                {/* Contenedor de los íconos de redes sociales */}
                <div className="flex gap-4">
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
            </div>
        </footer>
    );
};

export default Footer;
