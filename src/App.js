import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import EventPage from './components/EventPage/EventPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/event" element={<EventPage />} />
            </Routes>
        </Router>
    );
}

export default App;
