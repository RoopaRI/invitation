import React from 'react';
import './HomePage.css';
import Tagline from '../Tagline/Tagline';
import HeroSection from '../HeroSection/HeroSection';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import EventDetails from '../EventDetails/EventDetails';
import Footer from '../Footer/Footer';
import BackgroundMusic from '../BackgroundMusic/BackgroundMusic';

function HomePage() {
    return (
        <div className="homepage-grid">
            {/* ✅ Background Music - Auto Plays in Loop */}
            <BackgroundMusic />

            {/* Tagline Section */}
            <Tagline />

            {/* Hero Section */}
            <HeroSection />

            {/* Welcome Message */}
            <WelcomeMessage />

            {/* Event Details Section */}
            <EventDetails />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default HomePage;
