import './HomePage.css';
import couplePhoto from '../../assets/croppedcouple.png';
import swamy from '../../assets/swamy_cropped.png';
import bgMusic from '../../assets/background_music.mp3'; // ✅ Import audio file

function HomePage() {
    return (
        <div className="homepage-grid">
            {/* ✅ Background Music - Auto Plays in Loop */}
            <audio id="bgMusic" src={bgMusic} autoPlay loop muted></audio>


<div className='tagline-container'>
                <h1 className="tagline">Our special day, your special presence!</h1>
                </div>

            {/* Hero Section */}
            <div className="hero-section">

                
                <div className="hero-container">
                    {/* <h1 className="tagline">Our special day, your special presence!</h1> */}
                    <img src={couplePhoto} alt="Couple" className="hero-image" />
                    <h1 className="couple-names">Mr & Mrs Rohit Indikar</h1>
                </div>
            </div>

            <div className="welcome-message">
    <div className="welcome-text">
        We found love, we kept love, and now we celebrate love-with you! Come, be a part of our special day and make it even more memorable!✨
    </div>
</div>

            {/* Event Details Section */}
            <div className="event-section">
                <div className="god-image-container">
                    <img src={swamy} alt="Sri Satyanarayana Swamy" className="god-image"/>
                </div>
                <div className="event-card">
                    <h2 className="event-title">Sri Satyanarayana Swamy Pooja</h2>
                    <p className="event-details">Join us for a special event filled with divine blessings, love, and laughter.</p>
                    <p className="event-date">📅 May 24, 2025</p>
                    <p className="event-time">⏰ 12:00 PM onwards</p>
                    <p className="event-venue">
                        📍 <a href="https://maps.app.goo.gl/xbzrV6SfBJw8ABG96" target="_blank" rel="noopener noreferrer">
                        Sri Chandrala Nilaya, Bengaluru
                        </a>
                    </p>

                    {/* Add to Google Calendar Button */}
                    <a 
                        className="add-to-calendar" 
                        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Sri+Satyanarayana+Swamy+Pooja&dates=20250324T063000Z/20250324T083000Z&details=Join+us+for+a+special+pooja+ceremony!&location=Sri+Chandrala+Nilaya,+Bengaluru&sf=true&output=xml"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        ➕ Add to Google Calendar
                    </a>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <p className="footer-title">If you're lost, Call us!</p>
                <div className="contact-info">
                    <p>📞 Rohit: +91 9742467082</p>
                    <p>📞 Roopa: +91 9606502100</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
