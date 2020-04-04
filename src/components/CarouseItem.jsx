import React from "react";
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import PlayIcon from "../assets/img/play-icon.png";
import PlusIcon from "../assets/img/plus-icon.png";

const CarouseItem = ({cover, title, year, contentRating, duration}) => {
  return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src={cover}
        alt={title}
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
  <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
      </div>
    </div>
  );
};

CarouseItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

export default CarouseItem;
