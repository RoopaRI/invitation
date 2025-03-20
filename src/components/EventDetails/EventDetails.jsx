import React from 'react';
// import './EventDetails.css';
import '../HomePage/HomePage.css';
import swamy from '../../assets/swamy_cropped.png';

const EventDetails = () => {
    return (
        <div className="event-section">
            <div className="god-image-container">
                <img src={swamy} alt="Sri Satyanarayana Swamy" className="god-image" />
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
    );
};

export default EventDetails;
