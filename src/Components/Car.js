
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
    const imageSrc = `https://boo-prod.b-cdn.net/database/profiles/1697802955774f9b60b6012e20093b9da6b1b0d2d4521.jpg`;

  return (
    <img
      className="d-block w-100"
      src={imageSrc}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
