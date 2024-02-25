import React, {useState, useEffect} from "react";
import "./Cart.css";
import Axios from "axios";

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {  
        Axios.get('http://localhost:3000/getAll')
        .then((res)=> setProducts(res.data));
    }, []);
   

  return (
    <div className="web-page">
      <div className="cart-container">
        <div className="page-title">Your Bag</div>
        <div className="cart-contents">
          <table className="cart-table">
            <thead className="cart-table-head">
              <tr className="cart-table-head-row">
                <th className="cart-table-head-column">Product</th>
                <th className="cart-table-head-column">Description</th>
                <th className="cart-table-head-column">Quantity</th>
                <th className="cart-table-head-column">Price</th>
                <th className="cart-table-head-column">Delete</th>
              </tr>
            </thead>
            <tbody className="cart-table-body">
            {products && products.map((product) => (
    <tr className="cart-table-body-row" key={product.id}>
        <td className="cart-table-body-data">{product.name}</td>
        <td className="cart-table-body-data">description</td>
        <td className="cart-table-body-data">{product.stock}</td>
        <td className="cart-table-body-data">{product.price}</td>
        <td className="cart-table-body-data">
            <button className="x-button">X</button>
        </td>
    </tr>
))}  
            </tbody>
          </table>

          <div className="order-summary">
            <div className="order-summary-title">order summary</div>

            <div className="order-info">
              <div className="order-products">
                <div className="product-quantity">2 prdoducts</div>
                <div className="order-gross">64$</div>
              </div>

              <div className="order-shipping">
                <div className="shipping">Shipping</div>
                <div className="shipping-cost">5$</div>
              </div>
            </div>

            <div className="order-total">
                <div className="total-title">
                    Total
                </div>
                <div className="total">69$</div>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
