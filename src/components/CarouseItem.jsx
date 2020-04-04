import React from "react";

import '../assets/styles/components/CarouselItem.scss';

import PlayIcon from "../assets/img/play-icon.png";
import PlusIcon from "../assets/img/plus-icon.png";

const CarouseItem = () => {
  return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={PlayIcon}
            alt="Play icon"
          />
          <img
            className="carousel-item__details--img"
            src={PlusIcon}
            alt="Plus icon"
          />
        </div>
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>
  );
};

export default CarouseItem;
