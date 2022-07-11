
import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
const Rating = ({ rating }) => {
    //make rating heart icon
    const firstExample = {
        size: 20,
        value: rating.rate,
        edit: false,
        isHalf: true,
        color: 'grey',
        activeColor: "#ffd700",
    
      };
  return (
    <div className="rating">
      <ReactStars className="rate" {...firstExample} > 
      </ReactStars><span>&#40;{rating.count}&#41;</span>
      
    </div>
  );
}
export default Rating;
