import './HomePage.css';
import couplePhoto from '../../assets/croppedcouple.png';
import swamy from '../../assets/swamy.png';

function HomePage() {
    return (
        <div className="homepage-grid">
            {/* Hero Section */}
            <div className="hero-section">
                {/* <div className="tagline">Here's to 5 Amazing Years! 🎉❤️</div> */}

                <div className="hero-container">
                    <img src={couplePhoto} alt="Couple" className="hero-image" />
                    <h1 className="couple-names">Mr & Mrs Rohit Indikar</h1>
                </div>

                <div className="welcome-message">
                    Every moment together is a blessing, and today, we celebrate five incredible years of love and joy with our cherished family and friends!
                </div>

            </div>

            {/* Event Details Section */}
            <div className="event-section">
                <img src={swamy} alt='swamy'/>
                <h2 className="event-title">Sri Satyanarayana Swamy Pooja</h2>
                
                <div className="event-details-container">
                    <p className="event-details">
                        Join us for a special evening filled with divine blessings, love, and laughter.
                    </p>
                    <p className="event-date">📅 Date: March 25, 2025</p>
                    <p className="event-time">⏰ Time: 6:00 PM onwards</p>
                    <p className="event-venue">📍 Venue: Indikar Residence, Pune</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
