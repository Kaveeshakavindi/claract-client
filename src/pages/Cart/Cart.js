import React, { useState, useEffect } from "react";
import "./Cart.css";
import Axios from "axios";

const Cart = () => {
  const refreshInterval = 0; 

const reloadPage = () => {
  window.location.reload(true); 
};

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
    setTimeout(reloadPage, refreshInterval);
  };

  //delete item
  const removeItem = async (itemId) => {
    try {
      await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: "DELETE",
      });
 window.alert("item deleted successfuly")
     
    } catch (err) {
      console.error("Failed to delete cart:", err);
      window.alert("Failed to delete cart");
    }
    setTimeout(reloadPage, refreshInterval);
  };

  //calculate total
  function calculateTotal (price, quantity){
     let total = 0;

     total = price * quantity
     return total; 
  }

  //calculate subtotal
  function calculateSubTotal(items) {
    let subTotal = 0;

    items.forEach((item) => {
      subTotal += item.productPrice * item.quantity;

    });
    return subTotal;
  }

  return (
    <div className="web-page">
      <div className="cart-container">
        <div className="page-title">Your Bag</div>
        <div className="cart-contents">
        
        <table className="cart-table">
            
                 <tr className="cart-table-row">
                  <div className="cart-table-head">
                    PRODUCT
                  </div>
                  <div className="cart-table-head">
                    QTY
                  </div>
                  <div className="cart-table-head">
                    PRICE
                  </div>
                  <div className="cart-table-head">
                    TOTAL PRICE
                  </div>
                 </tr>
                 {cart.items.map((item) => (
                <tr className="cart-table-row" key={item._id}>
                 
                  <div className="cart-item-details">
                  <img src={item.productImg} 
                  className="cart-img" />
                  <div className="cart-item-contents">
                  
                    <div className="cart-item-name">
                      {item.productName}
                    </div>
                    <div className="cart-item-remove" onClick={() => removeItem(item._id)}>REMOVE</div>
                    </div>
                    
                  </div>
                  <div className="cart-item-qty">
                     {item.quantity}
                    </div>
                    <div className="cart-item-price">
                    {item.productPrice} $
                    </div>
                    <div className="cart-item-total">
                      {calculateTotal(item.productPrice, item.quantity)} $
                    </div>
                </tr>
              ))}
            <tr className="cart-table-row cart-sub-total">
                  <div></div>
                  <div></div>
                  <div>Sub Total</div>
                  <div>{calculateSubTotal(cart.items)} $</div>
            </tr>
            </table>

          <button onClick={deleteCart}>Reset cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
