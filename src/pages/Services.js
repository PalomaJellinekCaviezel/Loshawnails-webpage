import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Services = () => {
    const [activeService, setActiveService] = useState(null); // Estado para el servicio seleccionado
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para gestionar el modal

    const services = [
        {
            title: 'Uñas esculpidas',
            description: 'Un diseño único para cada cliente, adaptado a sus gustos y necesidades.',
            imgSrc: '/path/to/unas-esculpidas.jpg',
            photos: ['/path/to/unas-esculpidas-1.jpg', '/path/to/unas-esculpidas-2.jpg', '/path/to/unas-esculpidas-1.jpg', '/path/to/unas-esculpidas-2.jpg', '/path/to/unas-esculpidas-1.jpg', '/path/to/unas-esculpidas-2.jpg', '/path/to/unas-esculpidas-1.jpg', '/path/to/unas-esculpidas-2.jpg', '/path/to/unas-esculpidas-1.jpg', '/path/to/unas-esculpidas-2.jpg'], // Fotos para el modal
        },
        {
            title: 'Esmaltado Semipermanente',
            description: 'Esmaltado duradero con un acabado brillante.',
            imgSrc: '/path/to/esmaltado-semipermanente.jpg',
            photos: ['/path/to/esmaltado-1.jpg', '/path/to/esmaltado-2.jpg'],
        },
        {
            title: 'Capping',
            description: 'Protección para uñas naturales con gel de larga duración.',
            imgSrc: '/path/to/capping.jpg',
            photos: ['/path/to/capping-1.jpg', '/path/to/capping-2.jpg'],
        },
        {
            title: 'Press On Nails',
            description: 'Uñas listas para aplicar con diseños exclusivos.',
            imgSrc: '/path/to/press-on-nails.jpg',
            photos: ['/path/to/press-on-1.jpg', '/path/to/press-on-2.jpg'],
        }
    ];

    const openModal = (index) => {
        setActiveService(index); // Establece el servicio activo
        setIsModalOpen(true); // Abre el modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Cierra el modal
        setActiveService(null); // Restablece el servicio activo
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="flex-1 bg-notWhite p-6">
                <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-customBlue shadow-md rounded-lg overflow-hidden w-64 h-80 mx-auto cursor-pointer hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
                            onClick={() => openModal(index)} // Al hacer clic, abre el modal
                        >
                            <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold text-notWhite mb-2">{service.title}</h2>
                                <p className="text-notWhite">{service.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
            <Footer />

            {/* Modal */}
            {isModalOpen && activeService !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-notWhite rounded-lg shadow-lg p-6 max-w-3xl w-full relative mx-4 sm:mx-8 md:mx-auto max-h-[90vh] overflow-auto">
                        <button
                            className="absolute top-2 right-2 text-pinkiest -500 hover:text-notBlack -800"
                            onClick={closeModal} // Cierra el modal al hacer clic
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <h2 className="text-3xl font-bold text-pinkiest text-center mb-4">{services[activeService].title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                            {services[activeService].photos.map((photo, idx) => (
                                <div key={idx} className="w-full h-40">
                                    <img
                                        src={photo}
                                        alt={`Foto del servicio ${services[activeService].title}`}
                                        className="w-full h-full object-contain rounded-lg shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
