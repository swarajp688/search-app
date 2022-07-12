import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import useProductContext from "../../hooks/useProductContext";
const Filter = () => {
  const context = useProductContext();
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState(null);
  //handleRatingFilter
  useEffect(() => {
    console.log(rating)
    console.log(price)
    context.filter(rating, price);
  }, [rating,price]);

  const handleRatingFilter = (e) => {
    setRating(e.target.value);
  
  };

  const handlePriceChange = (e) => {
    if (e.target.value === "1") {
      setPrice(500);
    } else {
      setPrice(3000);
    }
  };

  return (
    <div>
      <h2>Filter</h2>
      
      <div className="filter-container">
        <div className="filter-item">
          <h3>Price</h3>
          <div className="filter-item-content">
            <div className="filter-item-content-item">
              <input
                name="price"
                type="radio"
                id="price-1"
                value="1"
                onClick={handlePriceChange}
              />
              <label htmlFor="price-1">Rs. 0 - Rs. 500</label>
              <input
                name="price"
                type="radio"
                id="price-2"
                value="2"
                onClick={handlePriceChange}
              />
              <label htmlFor="price-2">Rs. 500 - Rs. 3000</label>
            </div>
          </div>
          <h3>Rating</h3>
          {["1", "2", "3", "4", "5"].map((star, index) => (
            <div key={"input-" + star} className="filter-item-content-item">
              <input
                id={"rated" + star}
                value={star}
                name="ratings"
                type="radio"
                onChange={handleRatingFilter}
              />
              <ReactStars size={20} edit={false} isHalf={false} value={star} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
