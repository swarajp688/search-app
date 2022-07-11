import React from 'react'
import Rating from './Rating';
import Loader from '../Loader/Loader';
const ProductCard = ({product,loading}) => {
  
  console.log(product,'product');
  if(loading){
    return <Loader />
  }
  return (

    <div className='product-card'>
      <img className='product-image' src={product.image} alt={product.name} />
      <span className='product-name'>
        {product.category}
      </span>
      <p className='product-price'>Rs. {product.price}</p>
      <Rating rating={product.rating} />
    </div>
  )
}

export default ProductCard;