import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
  

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button className="navbar-btn">Shop Products</button>
        <button className="navbar-btn">About us</button>
        <button className="navbar-btn">Blog</button>
      </div>
      <div className="logo-container">
        <h1 className="logo">Public</h1>
        <h1 className="logo">Goods</h1>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">
          <SearchIcon fontSize="small" />
        </button>
        <button className="navbar-btn outlined">Free trial</button>
        <button className="navbar-btn">Log in</button>
        <button className="navbar-btn">Cart</button>
      </div>
    </div>
  )
}

export default Navbar;