import React,{useState, useEffect} from "react";
import "./Shop.css";
import { PiHeartStraightLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Axios from "axios";
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

    useEffect(()=> {  
        Axios.get('http://localhost:3000/getAll')
        .then((res)=> setProducts(res.data));
    }, []);

  const ShopItem = ({ imgUrl, title, price, rating}) => {

    return (
  
      <div className="item-container">
        <div className="item-sub-container">
          <div className="item-img">
            <img src={imgUrl}/>
          </div>
          <div className="item-name">{title}</div>
          <div className="item-final-section">
            <div className="item-price-section">
              <div className="item-price">{price} $</div>
              <div className="item-rating"><FaStar color="#ffd000"/> {rating}</div>
            </div>
            <div className="item-buttons">
              <PiHeartStraightLight />
              <IoCartOutline />
            </div>
          </div>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
     
    );
  };
  return (
    <div className="web-page">
      <div className="shop-container">
        <div className="page-title">Shop</div>
        <div className="items-container">

          {products && products.map((product) => (
           
    <Link to={`/item/${product._id}`} className="item-link">

          <ShopItem 
          title={product.name} 
          price={product.price} 
          rating={product.stock} 
          imgUrl={product.imgUrl}
          />
          </Link>

          ))} 
        </div>
      </div>
    </div>
  );
};

export default Shop;