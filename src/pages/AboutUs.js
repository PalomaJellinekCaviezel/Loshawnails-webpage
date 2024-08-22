import React from 'react';
import nailsStudio from '../img/nailsStudio.jpg';

const AboutUs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section
                className="relative flex-1 bg-cover bg-center flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${nailsStudio})`,
                }}
            >
                <div className="bg-notWhite bg-opacity-80 p-6 sm:p-10 rounded-lg max-w-lg sm:max-w-3xl shadow-lg mx-4 sm:mx-auto">
                    <h1 className="text-2xl sm:text-2xl md:text-4xl text-notBlack font-bold mb-4">
                        Somos Loshawnails home studio
                    </h1>
                    <p className="font-semibold sm:text-lg md:text-xl text-notBlack leading-relaxed">
                        Comprometidas con la belleza y el cuidado de tus uñas hace más de 4 años.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
