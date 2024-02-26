import React, { useState, useEffect } from "react";
import "./Cart.css";
import Axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3000/cart")
      .then((response) => {
        const json = JSON.stringify(response.data);
        setCart(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart: ", error);
        window.alert("Error fetching cart");
      });
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  //delete cart
  const deleteCart = async () => {
    try {
      await fetch("http://localhost:3000/cart", {
        method: "DELETE",
      });

      window.alert("Cart deleted successfully");
    } catch (err) {
      console.error("Failed to delete cart:", err);
      window.alert("Failed to delete cart");
    }
  };

  //calculate total
  function calculateTotal(items) {
    let total = 0;
    items.forEach((item) => {
      total += item.productPrice * item.quantity;
    });
    return total;
  }

  return (
    <div className="web-page">
      <div className="cart-container">
        <div className="page-title">Your Bag</div>
        <div className="cart-contents">
        <table className="cart-table">
            {cart.items.map((item) => (
             
                <tr className="cart-table-row" key={item._id}>
                  <img src={item.productImg} 
                  className="cart-img" />
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      {item.productName}
                    </div>
                    <div className="cart-item-price">
                     Price: {item.productPrice} $
                    </div>
                    
                  </div>
                  <div className="cart-item-qty">
                     Qty: {item.quantity}
                    </div>
                </tr>
              
            ))}
            </table>
          <div>Total Price: {calculateTotal(cart.items)} $</div>
          <button onClick={deleteCart}>delete cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
