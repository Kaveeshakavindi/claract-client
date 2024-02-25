import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Item.css";
import DropDown from "../../components/DropDown/DropDown";
import Product from "../../components/Product/Product";

const Item = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    // Fetch the specific item based on the ID
    Axios.get(`http://localhost:3000/item/${id}`)
      .then((res) => setSelectedItem(res.data))
      .catch((error) => console.error("Error fetching item:", error));
  }, [id]);

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

            <button className="item-info-button">
              Add to Bag - {selectedItem.price} $
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
