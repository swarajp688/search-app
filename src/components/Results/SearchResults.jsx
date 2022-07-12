
import ProductCard from './ProductCard';
import useProductContext from '../../hooks/useProductContext';
import Loader from '../Loader/Loader';
import Filter from '../Filter/Filter';
import { useEffect } from 'react';
const SearchResults = () => {
  const context = useProductContext();
  const { products } = context;
  useEffect(()=>{
    context.fetchProducts();
  },[])
  return (
    <>
    <h2>Search Results</h2>
    <div className='display-product'>
      {context.loading ?<div className='loader'> <Loader /> </div>:<>
        <section className='products-list'>
        {products?.map((product) => {
          return <ProductCard loading={context.loading} key={product.id} product={product} />
          })}
        
        </section>
        <Filter />
        </>
}
    </div>
    </>
  )
}

export default SearchResults;