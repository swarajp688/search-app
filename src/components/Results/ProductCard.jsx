import React from 'react'
import Rating from './Rating';
import Loader from '../Loader/Loader';
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import useProductContext from '../../hooks/useProductContext';
const ProductCard = ({product,loading}) => {
  const [viewBtn,setViewBtn] = React.useState(false);
  const context = useProductContext();
  const showBtn =()=>{
    setViewBtn(!viewBtn);
  }
  const changeWishList =()=>{
    context.toggleWishList(product.id);
    console.log(context.products);
  }
  if(loading){
    return <Loader />
  }
  return (

    <div className='product-card'>
      <div className='product-image'>
        <img src={product.image} alt={product.name} className='image' onMouseEnter={showBtn} onMouseLeave={showBtn}/>
        {product.wishList ?  <AiFillHeart className='wishlist' onClick={changeWishList}/> : <AiOutlineHeart className='wishlist' onClick={changeWishList} />}
        {viewBtn && <button className='btn-product'>
          View Product
        </button>}
      </div>
      <span className='product-name'>
        {product.category}
      </span>
      <p className='product-price'>Rs. {product.price}</p>
      <Rating rating={product.rating} />
    </div>
    // make a button on hover div to view product
    // make a button on hover div to add to wishlist
    // make a button on hover div to add to cart

  )
}

export default ProductCard;