import React from "react";
import "./Product.css";
import productImg from "./../../assets/images/3.png";
import { useParallax } from "react-scroll-parallax";
import creamImg from "../../assets/images/cream.png";

const Product = () => {
  const parallax = useParallax({
    scale: [0.8, 1, 'easeInQuad'],
  });
  return (
    <div className="product-container">
      <div className="product-contents">
        <div className="product-title">claract</div>
        <div className="product-image">
          <div className="images"ref={parallax.ref} >
            <img src={productImg} className="product-img1" />
            <img src={creamImg} className="product-img2" />
          </div>
          <div className="product-info">
            <div className="attributes">
              <div className="attribute">Aesthetic</div>
              <div className="attribute">Aesthetic</div>
              <div className="attribute">Aesthetic</div>
            </div>
            <div className="product-info-contents">
              <div className="product-info-body">for body</div>
              <div className="product-info-title">Daily Moisturizer</div>
              <div className="product-price-container">
                <div className="product-info-price">$8</div>
                <button className="product-button">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-product">
        <div className="about-product-section">
            <div className="about-product-title">Ingredients</div>
            <div className="about-product-description">Hyaluronic Acid, Vitamin E, Jojoba Oil, Green Tea Extract, Glycerin</div>
        </div>
        <div className="about-product-section">
            <div className="about-product-title">How It Works:</div>
            <div className="about-product-description">Claract Daily Moisturizer combines hyaluronic acid for lasting hydration, vitamin E for youthfulness, jojoba oil for balanced moisture, green tea extract for soothing, and glycerin for all-day softness.</div>
        </div>
        <div className="about-product-section">
            <div className="about-product-title">Directions for Use:</div>
            <div className="about-product-description">Apply Claract Daily Moisturizer to cleansed skin every morning, gently massaging in upward motions until fully absorbed.</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
