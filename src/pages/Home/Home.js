import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import HomeAd from "../../components/Home-ad/HomeAd";
import InfoCard from "../../components/InfoCard/InfoCard";
import { useParallax } from "react-scroll-parallax";
import Carousel from "../../components/Carousel/Carousel";
import product1 from "./../../assets/images/1.png";
import product2 from "./../../assets/images/2.png";
import product3 from "./../../assets/images/5.png";
import bg from "./../../assets/images/bg.png";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div className="web-page">
      <div className="vertical-scroll">
        <div className="home-page-container">
          <div className="home-top">
            <img src={bg} className="home-img-bg" />
            <div className="text-overlay">Glow Beyond Measure</div>
          </div>

          <div className="home-ads-container">
            <HomeAd category={"Moisturizer"} imgUrl={product1} />
            <HomeAd category={"SPF"} imgUrl={product2} />
            <HomeAd category={"Serum"} imgUrl={product3} />
          </div>
        </div>
        <Carousel />
        <div className="home-ads-container1">
          <HomeAd category={"Moisturizer"} imgUrl={product1} />
          <HomeAd category={"SPF"} imgUrl={product2} />
          <HomeAd category={"Serum"} imgUrl={product3} />
        </div>
        <div className="product-section">
          <div className="home-info-title">Products</div>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
