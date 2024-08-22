import React from "react";

const Map = () => {
    const loshawnailsAddress = "Buenos Aires, Tigre.";
    const googleMapsLink = "https://maps.app.goo.gl/xXgCLXsup9W6e8oK6"; // Enlace generado en Google Maps

    return (
        <div className="flex flex-col min-h-screen bg-hoverPink">
            <section className="flex-1 p-8 lg:p-10 flex items-center justify-center">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:w-3/4 mx-auto">
                    {/* Contenedor con estilo de rectángulo */}
                    <div className="lg:w-1/1 mb-8 lg:mb-0 lg:mr-8 p-6 border border-pinkiest rounded-lg shadow bg-white">
                        <h1 className="text-2xl font-semibold text-notBlack mb-4">¿Dónde estamos?</h1>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <p className="text-md text-notBlack leading-relaxed flex-1">
                                {loshawnailsAddress}
                            </p>
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pinkiest hover:underline md:mt-0text-lg"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Iframe del mapa */}
                    <div className="lg:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.814772997247!2d-58.660583525661856!3d-34.4822228510896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca344a5fb04af%3A0xf709b1921be3540f!2sCHC%2C%20Gral.%20Lavalleja%202579%2C%20B1618%20El%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723848465537!5m2!1ses!2sar"
                            width="100%"
                            height="300"
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
