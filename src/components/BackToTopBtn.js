import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Mostrar el botón después de 300px de scroll
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-3 bg-customBlue text-notWhite rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}
        >
            <FaArrowUp size={24} />
        </button>
    );
};

export default BackToTopButton;
