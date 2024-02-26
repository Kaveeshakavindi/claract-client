import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Item.css";
import DropDown from "../../components/DropDown/DropDown";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    // Fetch the specific item based on the ID
    Axios.get(`http://localhost:3000/item/${id}`)
      .then((res) => setSelectedItem(res.data))
      .catch((error) => console.error("Error fetching item:", error));
  }, [id]);

  const addToBag = async () => {
    
    try {
       //fetch updated cart items after making changes
       const response = await fetch('http://localhost:3000/cart');
       const data = await response.json();
       setCartItems(data.items); 

        const existingCartItem = data.items.find(item => item.productId === selectedItem._id);

        if (existingCartItem) {
            //if the product already exists in the cart update its quantity
         
            const newQty = existingCartItem.quantity + 1;
            

            await fetch(`http://localhost:3000/cart/${existingCartItem._id}`, {
              
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify({ quantity: newQty}), // increment quantity
               
            }
            );
            window.alert(`product exists went through patch ${existingCartItem.quantity}`, )
        } else {
            //if the product doesn't exist in the cart, add it
            await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: selectedItem._id, quantity: 1, productName: selectedItem.name, productImg: selectedItem.imgUrl, productPrice: selectedItem.price }), // Send new item data
            });
            window.alert('product doesnt exist, item added to cart', cartItems)
        }
        
       // Update cart items state
    } catch (err) {
        console.error('Failed to update cart:', err);
        window.alert('Failed to update cart');
    }
};

  
  
  


  return (
    <div className="web-page">
      {selectedItem && (
        <div className="item-info-container">
          <div className="item-info-img-container">
            <img src={selectedItem.imgUrl} className="item-info-img" />
          </div>
          <div className="item-info-contents">
            <div className="item-info-name">{selectedItem.name}</div>

            <div className="item-info-price-size">
              <div className="item-info-price">{selectedItem.price} $</div>
              <div className="item-info-size">NET WT 2.02 OZ | 57 G</div>
            </div>

            <div className="item-info-description">
              {selectedItem.description}
            </div>

            <DropDown dropTitle={"Benefits"} moreInfo={selectedItem.benefits} />
            <DropDown dropTitle={"Application"} moreInfo={selectedItem.application} />
            <DropDown dropTitle={"Ingredients"} moreInfo={selectedItem.ingredients} />


            <button onClick={addToBag}className="item-info-button" >
              Add to Bag - {selectedItem.price} $
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
