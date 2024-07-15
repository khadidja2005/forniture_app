"use client"
import React, { useState, useEffect } from 'react';
import './style.css'; // Import the CSS file

type Props = {};
const imagelist = [
  "/images/landing_page/livrm1.jpg",
  "/images/landing_page/livrm2.jpg",
  "/images/landing_page/livrm4.jpg",
  "/images/landing_page/kit2.jpg"
];

export default function Sliding_Images(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagelist.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel  " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {imagelist.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`}/>
        ))}
      </div>
    </div>
  );
}
