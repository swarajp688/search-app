import React from 'react'

const LatestTrends = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <div>
        <h4>Latest Trends</h4>

    </div>
  )
}

export default LatestTrends