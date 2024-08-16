import React from "react";

const Map = () => {
    const loshawnailsAddress = "Buenos Aires, Tigre.";
    const googleMapsLink = "https://maps.app.goo.gl/xXgCLXsup9W6e8oK6"; // Enlace generado en Google Maps

    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex-1 p-6 bg-notWhite flex items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:w-4/5">
                    {/* Contenedor con estilo de rectángulo */}
                    <div className="mb-6 lg:mb-0 lg:mr-8 lg:w-1/2 p-6 border-2 border-pinkiest rounded-md shadow bg-white">
                        <h1 className="text-4xl font-bold text-notBlack mb-4">¿Dónde estamos?</h1>
                        <div className="flex items-center space-x-4">
                            <p className="text-base text-notBlack leading-relaxed flex-1">
                                {loshawnailsAddress}
                            </p>
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pinkiest hover:underline"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Iframe del mapa */}
                    <div className="lg:w-1/2 flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.814772997247!2d-58.660583525661856!3d-34.4822228510896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca344a5fb04af%3A0xf709b1921be3540f!2sCHC%2C%20Gral.%20Lavalleja%202579%2C%20B1618%20El%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723848465537!5m2!1ses!2sar"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md w-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Map;
