import React, { useState, useEffect } from "react";
import "./Carousel.css";

const data = [
  {
    id: 0,
    title: "Brand Goal",
    description: `To become the leading provider of sustainable fashion solutions,
        empowering individuals to express their unique style while reducing
        their environmental footprint.`,
        button: `See More`
  },
  {
    id: 1,
    title: "Brand Mission",
    description: `Our brand's mission is to redefine modern skincare by offering high-quality, natural products that enhance both beauty and well-being. We are committed to promoting self-care rituals that prioritize health, sustainability, and inclusivity. `,
    button: `See More`
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-info-slideshow">
      <div className="home-info-slider">
        <div className="home-info"
         key={data[currentIndex].id}>
          <div className="home-info-title">{data[currentIndex].title}</div>
          <div className="home-info-description">
            {data[currentIndex].description}
            <div className="line-button">
            <button>{data[currentIndex].button}</button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Carousel;
