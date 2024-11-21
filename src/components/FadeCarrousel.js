import { useEffect, useState } from "react";

const FadeCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`carousel-image rounded-3xl ${
            index === currentIndex ? "fade-in" : "fade-out"
          }`}
        />
      ))}
    </div>
  );
};

export default FadeCarousel;
