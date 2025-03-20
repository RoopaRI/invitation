import React from 'react';
// import './HeroSection.css';
import '../HomePage/HomePage.css';
import couplePhoto from '../../assets/croppedcouple.png';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <img src={couplePhoto} alt="Couple" className="hero-image" />
                <h1 className="couple-names">Mr & Mrs Rohit Indikar</h1>
            </div>
        </div>
    );
};

export default HeroSection;
