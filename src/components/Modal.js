// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, service, onClose }) => {
    if (!isOpen || !service) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-notWhite rounded-lg shadow-lg p-6 max-w-3xl w-full relative mx-4 sm:mx-8 md:mx-auto max-h-[90vh] overflow-auto">
                <button
                    className="absolute top-2 right-2 text-pinkiest -500 hover:text-notBlack -800"
                    onClick={onClose}
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
                <h2 className="text-3xl font-bold text-pinkiest text-center mb-4">{service.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {service.photos.map((photo, idx) => (
                        <div key={idx} className="w-full h-40">
                            <img
                                src={photo}
                                alt={`Foto del servicio ${service.title}`}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
