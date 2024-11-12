import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/slider.module.css';
import Link from 'next/link';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Function to handle the slide change manually
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));

      // Move to the next slide when the progress reaches 100
      if (progress >= 100) {
        setIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming 4 slides
        setProgress(0); // Reset progress for the next slide
      }
    }, 100); // Adjust timing for a smooth filling effect

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className={styles.sliderContainer}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false} // Hides the navigation arrows
        interval={null}
        wrap={true}
      >
        <Carousel.Item>
          <div onClick={() => handleSelect(1)}>
            <img className="d-block w-100" src="/cover-01.webp" alt="Slide 1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div onClick={() => handleSelect(2)}>
            <img className="d-block w-100" src="/cover-02.webp" alt="Slide 2" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div onClick={() => handleSelect(3)}>
            <img className="d-block w-100" src="/cover-03.webp" alt="Slide 3" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div onClick={() => handleSelect(0)}>
            <img className="d-block w-100" src="/cover-04.webp" alt="Slide 4" />
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Horizontal pagination line below the slider */}
      <div className={styles.paginationContainer}>
        {[0, 1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className={`${styles.paginationLine} ${index === idx ? styles.activePaginationLine : ''}`}
            style={{
              width: index === idx ? `${progress}%` : '100%',
              backgroundColor: index === idx ? '#007bff' : '#ddd',
            }}
            onClick={() => handleSelect(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

