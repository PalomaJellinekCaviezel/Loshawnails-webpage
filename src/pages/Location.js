import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Map from "../components/Map";

const Location = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Map />
            <Footer />
        </div>
    );
};

export default Location; 