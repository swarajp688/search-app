import React from 'react'
import FilterResult from './FilterResult';
import ProductCard from './ProductCard';
import useProductContext from '../../hooks/useProductContext';
import Loader from '../Loader/Loader';
const SearchResults = () => {
  const context = useProductContext();
  const { products } = context;
  return (
    <div>
      {context.loading ? <Loader /> :
        <section>
        {/* {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        }} */}
        {products?.map((product) => {
          return <ProductCard loading={context.loading} key={product.id} product={product} />
          })}
        <FilterResult />
        </section>
}
    </div>
  )
}

export default SearchResults;