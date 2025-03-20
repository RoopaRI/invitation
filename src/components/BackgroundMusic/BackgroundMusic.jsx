import React from 'react';
import bgMusic from '../../assets/background_music.mp3'; // ✅ Import audio file

const BackgroundMusic = () => {
    return <audio id="bgMusic" src={bgMusic} autoPlay loop muted />;
};

export default BackgroundMusic;
