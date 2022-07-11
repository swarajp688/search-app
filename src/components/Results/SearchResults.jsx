import React from 'react'
import FilterResult from './FilterResult';
import ProductCard from './ProductCard';
import useProductContext from '../../hooks/useProductContext';
import Loader from '../Loader/Loader';
const SearchResults = () => {
  const context = useProductContext();
  const { products } = context;
  return (
    <>
    <h2>Search Results</h2>
    <div className='display-product'>
      {context.loading ? <Loader /> :<>
        <section className='products-list'>
        {products?.map((product) => {
          return <ProductCard loading={context.loading} key={product.id} product={product} />
          })}
        
        </section>
        <FilterResult />
        </>
}
    </div>
    </>
  )
}

export default SearchResults;