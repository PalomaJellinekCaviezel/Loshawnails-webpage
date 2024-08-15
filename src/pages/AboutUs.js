import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import nailsStudio from '../img/nailsStudio.jpg';  // Asegúrate de que la imagen esté bien importada

const AboutUs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section
                className="relative flex-1 bg-cover bg-center flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${nailsStudio})`,
                }}
            >
                <div className="bg-notBlack bg-opacity-50 p-6 sm:p-10 rounded-lg max-w-lg sm:max-w-3xl shadow-lg mx-4 sm:mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-hoverPink font-bold mb-6">
                        Somos Loshawnails
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-hoverPink leading-relaxed">
                        Comprometidas con la belleza y el cuidado de tus uñas.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;
