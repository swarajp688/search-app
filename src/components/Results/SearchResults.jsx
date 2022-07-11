import React from 'react'
import FilterResult from './FilterResult';
import ProductCard from './ProductCard';
const SearchResults = () => {
  return (
    <div>
        <section>
        <ProductCard />
        
        <FilterResult />
        </section>
    </div>
  )
}

export default SearchResults;