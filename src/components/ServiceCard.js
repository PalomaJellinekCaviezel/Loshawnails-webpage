import React from 'react';

const ServiceCard = ({ service, onClick }) => (
    <div
        className="bg-customBlue shadow-lg rounded-lg overflow-hidden w-full max-w-xs mx-auto cursor-pointer hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 mb-8"
        onClick={onClick}
    >
        <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold text-notBlack mb-2">{service.title}</h2>
            <p className="text-notBlack text-sm">{service.description}</p>
        </div>
    </div>
);

export default ServiceCard;
