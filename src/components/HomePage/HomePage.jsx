import './HomePage.css';
import couplePhoto from '../../assets/couplephoto.JPG';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='homepage'>
            <div className="tagline"> Here's to 5 Amazing Years! 🎉❤️</div>

            {/* Hero Section with Names on Top of Image */}
            <div className="hero-container">
                <img src={couplePhoto} alt="Couple" className="hero-image" />
                <h1 className="couple-names">Mr & Mrs Rohit Indikar</h1>
            </div>

            <div className="welcome-message">Every moment together is a blessing, and today, we celebrate five incredible years of love and joy with our cherished family and friends!</div>
            
            <div className="button-container">
                <button className="view-event-button" onClick={() => navigate('/event')}>
                    View Event Details
                </button>
            </div>
        </div>
    );
}

export default HomePage;
