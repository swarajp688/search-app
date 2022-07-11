import React from 'react'
import Rating from './Rating';
import Loader from '../Loader/Loader';
const ProductCard = ({product,loading}) => {
  
  console.log(product,'product');
  if(loading){
    return <Loader />
  }
  return (

    <div>
      
      <Rating rating={product.rating} />
    </div>
  )
}

export default ProductCard;