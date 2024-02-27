import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./Navbar.css";

const Navbar = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3000/cart")
      .then((response) => {
        setCart(response.data);
    
      })
      .catch((error) => {
        console.error("Error fetching cart: ", error);
        window.alert("Error fetching cart");
      });
  }, []);

  //number of cart items
  const getNumberOfItems = () => {
    if (cart === null) {
      return 0; // Assuming cart is initially null
    } else {
      return cart.items.length;
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/" className="logo">
          Claract.
        </Link>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* <Link to="/about" className="nav-link">
            About
          </Link> */}
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>
        <Link to="/cart" className="nav-link-contact">
          Cart - {getNumberOfItems()}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
