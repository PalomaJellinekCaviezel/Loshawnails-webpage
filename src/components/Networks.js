import React from 'react';
import { FaWhatsapp, FaInstagram, FaPinterest } from 'react-icons/fa';

const Networks = () => {
    return (
        <section className='flex flex-col md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[40vh] items-center justify-center bg-pinkiest p-4'>
            <div className="flex flex-col gap-6 md:flex-row md:gap-12 items-center">
                {/* Redes Sociales */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-bold text-notBlack mb-2 text-center">
                        Querés ver mas de nuestros diseños? <br />¡Seguinos en nuestras redes!
                    </h2>
                    <div className="flex gap-4 items-center">
                        <a
                            href="https://www.instagram.com/loshawnails/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-notBlack hover:text-hoverPink transition-colors duration-300"
                        >
                            <FaInstagram className="w-8 h-8 mr-2" />
                            <span className="hidden md:inline text-base">@loshawnails</span>
                        </a>
                        <a
                            href="https://pin.it/508xThLBa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-notBlack hover:text-hoverPink transition-colors duration-300"
                        >
                            <FaPinterest className="w-8 h-8 mr-2" />
                            <span className="hidden md:inline text-base">@loshawnails</span>
                        </a>
                    </div>
                </div>

                {/* WhatsApp */}
                <div id='appointment' className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
                    <a
                        href="https://wa.me/1127734295" // Reemplaza con tu número de WhatsApp
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-hoverPink text-notBlack py-3 px-6 rounded-lg shadow-lg hover:bg-notWhite hover:text-pinkiest transition-colors duration-300"
                    >
                        <FaWhatsapp className="w-10 h-10 mr-3" />
                        <span className="text-lg font-semibold">Agenda tu cita</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Networks;
