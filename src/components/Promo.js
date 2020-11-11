import React from 'react'
import '../css/Promo.css'
import promo from '../images/press-quotes.png'


const Promo = () => {
  return (
    <div className="promo-container">
      <div className="promo-textbox">
        <h1 className="promo-headline"> New to Public Goods? </h1>
        <p className="promo-text">
          We’re commited to making healthier, better choices easy and affordable to all. Good-for you, eco-friendly and beautifully designed home essentials, all in one place and at ultra-low prices. 
        </p>
        <p className="caption">As seen in: </p>
        <img 
          src={promo} 
          alt="Newsweek, domino, Forbes, apartment therapy, AD, Fast Company" 
          className="as-seen-in"
        />
        <button className="btn-main promo-btn">Shop Now</button>
      </div>      
    </div>
  )
}

export default Promo
