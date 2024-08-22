import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import Networks from '../components/Networks';
import BackToTopButton from '../components/BackToTopBtn';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutUs />
      <Services />
      <ContactUs />
      <Networks />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default Home;
