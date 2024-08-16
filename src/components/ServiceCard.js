import React from 'react';

const ServiceCard = ({ service, onClick }) => (
    <div
        className="bg-customBlue shadow rounded-lg overflow-hidden w-64 h-80 mx-auto cursor-pointer hover:shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={onClick}
    >
        <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h2 className="text-2xl font-bold text-notBlack mb-2">{service.title}</h2>
            <p className="text-notBlack">{service.description}</p>
        </div>
    </div>
);

export default ServiceCard;
