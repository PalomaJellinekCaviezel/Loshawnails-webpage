import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-customBlue text-notBlack py-2 px-4 shadow-inner">
            <div className="w-full mx-auto flex justify-between items-center">
                {/* Contenedor del texto */}
                <p className="text-xxs text-center mx-auto">
                    &copy; 2024 Loshawnails <br />
                    Página creada por palomacaviezel7@gmail.com
                </p>
            </div>
        </footer>
    );
};

export default Footer;
