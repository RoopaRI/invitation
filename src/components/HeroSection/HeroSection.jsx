import React from 'react';
// import './HeroSection.css';
import '../HomePage/HomePage.css';
// import couplePhoto from '../../assets/croppedcouple.png';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                {/* <img src={couplePhoto} alt="Couple" className="hero-image" /> */}
                <ImageCarousel />
                <h1 className="couple-names">Mr & Mrs Rohit Indikar</h1>
            </div>
        </div>
    );
};

export default HeroSection;
