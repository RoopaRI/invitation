import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';


const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={img1} alt="Slide 1" className="carousel-image" />
                </div>
                <div>
                    <img src={img2} alt="Slide 2" className="carousel-image" />
                </div>
                <div>
                    <img src={img3} alt="Slide 3" className="carousel-image" />
                </div>
                <div>
                    <img src={img4} alt="Slide 4" className="carousel-image" />
                </div>
            </Slider>
        </div>
    );
};

export default ImageCarousel;
