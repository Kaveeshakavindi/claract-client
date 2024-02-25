import React from "react";
import "./HomeAd.css";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const HomeAd = ({ imgUrl, category, overlayText }) => {
  return (
    <div className="home-ad-container">
      <div className="home-ad-contents">
        <div className="ad-category-container">
          <div className="ad-category">{category}</div>
          <BsArrowUpRightCircleFill
            color="black"
            size={30}
            className="arrow-icon"
          />
        </div>
        <div className="ad-name">
          <img src={imgUrl} className="product-img" />
        </div>
      </div>
      <div class="overlay">
        <div class="overlay-text">{overlayText}</div>
        <button className="overlay-button">
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeAd;
