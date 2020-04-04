import React from "react";
import CarouselItem from './CarouseItem';

import '../assets/styles/components/Carousel.scss';


const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel__container">
        <CarouselItem/>
      </div>
    </section>
  );
};

export default Carousel;
