import React from "react";

const Banner = () => {
  return (
    <section className="lg:relative">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/210211142532-18-classic-italian-dishes.jpg?q=w_2485,h_1398,x_0,y_0,c_fill/w_1280"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/210211142532-18-classic-italian-dishes.jpg?q=w_2485,h_1398,x_0,y_0,c_fill/w_1280"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/210211142532-18-classic-italian-dishes.jpg?q=w_2485,h_1398,x_0,y_0,c_fill/w_1280"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/210211142532-18-classic-italian-dishes.jpg?q=w_2485,h_1398,x_0,y_0,c_fill/w_1280"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="lg:absolute bottom-32 left-1/3">
        <h1 className="text-7xl tracking-wider text-green-500 font-bold text-center pt-4">
          Bella Italia
        </h1>
        <h1 className="text-5xl text-green-500 font-bold text-center pt-4 tracking-wider">
          ---Italian Best Test---
        </h1>
      </div>
    </section>
  );
};

export default Banner;
