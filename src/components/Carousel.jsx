import React from "react";

import '../assets/styles/components/Carousel.scss';


const Carousel = props => {
  return (
    <section className="carousel">
      <div className="carousel__container">
          {props.children}
      </div>
    </section>
  );
};

export default Carousel;
