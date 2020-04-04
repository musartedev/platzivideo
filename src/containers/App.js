import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouseItem";

import "../assets/styles/app.scss";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/initialState");
        const data = await response.json();
        return setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  const renderList = (list = []) => {
    return (
      <>
        {list.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </>
    )
  }

  return (
    <div>
      <Header />
      <Search />
      {videos.myList && videos.myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>{renderList(videos.myList)}</Carousel>
        </Categories>
      )}
      {videos.trends && videos.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>{renderList(videos.trends)}</Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
