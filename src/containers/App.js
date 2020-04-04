import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouseItem";

import "../assets/styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </Categories>
        <Categories title="Mi Lista 2">
          <Carousel>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </Categories>
        <Footer />
      </div>
    );
  }
}
