import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Modal from '../components/Modal';
import image from '../img/imgList';

const Services = () => {
    const [activeService, setActiveService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            title: 'Uñas esculpidas',
            description: 'Un diseño único para cada cliente, adaptado a sus gustos y necesidades.',
            imgSrc: image[5],
            photos: [image[5], image[1], image[3], image[6], image[9], image[10]],
        },
        {
            title: 'Esmaltado Semipermanente',
            description: 'Esmaltado duradero con un acabado brillante.',
            imgSrc: image[2],
            photos: [image[2], image[4], image[7], image[8]],
        },
        {
            title: 'Capping',
            description: 'Protección para uñas naturales con gel de larga duración.',
            imgSrc: image[8],
            photos: [image[2], image[4], image[7], image[8]],
        },
        {
            title: 'Press On Nails',
            description: 'Uñas listas para aplicar con diseños exclusivos.',
            imgSrc: image[14],
            photos: [image[11], image[12], image[13], image[14], image[15], image[16], image[17]],
        }
    ];

    const openModal = (index) => {
        setActiveService(services[index]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveService(null);
    };

    return (
        <div className="flex flex-col min-h-screen ">
            <section id='services' className="flex-1 bg-notWhite pt-10 p-4 md:p-6 flex items-center justify-center">
                <div className="w-full max-w-screen-lg">
                    <h1 className="text-3xl font-bold text-pinkiest text-center mb-8">Nuestros Servicios</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                service={service}
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} service={activeService} onClose={closeModal} />
        </div>
    );
};

export default Services;
