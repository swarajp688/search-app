import React, { useEffect, useRef } from "react";
import useProductContext from "../../hooks/useProductContext";
import Loader from "../Loader/Loader";
const LatestTrends = () => {
  const context = useProductContext();
  const { trendProducts } = context;
  const searchref = useRef(null);
  useEffect(() => {
    context.fetchTrend();
    console.log(context.trendProducts,'contect');
  }, []);

  return (
    <div className="latest-trend">
      <h4>Latest Trends</h4>
      {context.loading ? <Loader /> : 
      <div className="trend-container">

        {trendProducts.map((product) => {
          return <div key={product.id} className="productBox">
            <img src={product.image} alt={product.title} />
            <p ref={searchref}>
            {product.category}
            </p>
          </div>
        })}
      </div>
}
    </div>
  );
};

export default LatestTrends;
