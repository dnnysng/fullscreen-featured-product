import React from 'react'
import './FeaturedProduct.css'

import Background from './Background/Background'
import RedBlock from './RedBlock/RedBlock'
import ProductCard from './ProductCard/ProductCard'

const featuredProduct = () => {
  return (
    <div className="fp-wrapper">
      <Background />
      <RedBlock />
      <ProductCard />
    </div>
  )
}

export default featuredProduct