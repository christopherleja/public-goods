import React from 'react'
import overnight from '../images/product_images/bamboo-overnight-pads.jpg'
import regular from '../images/product_images/bamboo-regular-maxi-pad.jpg'
import sup from '../images/product_images/bamboo-super-maxi-pad.jpg'
import liner from '../images/product_images/bamboo-panty-liners.jpg'
import '../css/Product.css'

const Product = () => {
  const products = [
    {
      name: "Bamboo Regular Pad",
      price: "$3.00",
      image: regular
    },
    {
      name: "Bamboo Super Maxi Pad",
      price: "$3.00",
      image: sup
    },
    {
      name: "Bamboo Overnight Pads",
      price: "$3.00",
      image: overnight
    },
    {
      name: "Bamboo Panty Liner",
      price: "$3.00",
      image: liner
    },
    
  ]

  const renderProducts = () => {
    return products.map(prod => {
      const { price, name, image } = prod;
      return (
        <div className="product-item">
          <img src={image} alt={name} className="product-img"/>
          <div className="product-details">
            <h5 className="product-title">{name} </h5>
            <h4 className="product-price">{price}</h4>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className="headline-container">
        <h1 className="product-headline">The Collection</h1>
      </div>
      <div className="product-container">
        {renderProducts()}
      </div>
      <div className="btn-container">
        <button className="btn-main product-btn">Shop Now</button>
      </div>
    </>
  )
}

export default Product
