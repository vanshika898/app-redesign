import React, { useState } from 'react';
import './MediaSlider.css'; // Import your CSS for styling

const MediaSlider = () => {
  const mediaItems = [
    'img/img1.png',
    'img/img1.png',
    'img/img1.png',
    'img/img1.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="media-slider">
      <button onClick={goToPrevSlide} className="prev-button">
        &lt;
      </button>
      <img src={mediaItems[currentIndex]} alt={`Media ${currentIndex + 1}`} className="current-slide" />
      <button onClick={goToNextSlide} className="next-button">
        &gt;
      </button>
    </div>
  );
};

export default MediaSlider;
