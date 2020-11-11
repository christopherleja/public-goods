import React from 'react'
import '../css/Navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import DragHandleIcon from '@material-ui/icons/DragHandle'

const Navbar = () => {
  
  return (
    <div className="navbar-container">
      {/* the navbar's left side for desktop */}
      <div className="navbar-left">
        <button className="navbar-btn">Shop Products</button>
        <button className="navbar-btn">About us</button>
        <button className="navbar-btn">Blog</button>
      </div>

      {/* the navbar's left side for mobile */}
      <div className="navbar-left-mobile">
        <button className="navbar-btn">
          <DragHandleIcon />
        </button>
      </div>

      <div className="logo-container">
        <h1 className="logo">Public</h1>
        <h1 className="logo">Goods</h1>
      </div>

      {/* the navbar's right side on desktop */}
      <div className="navbar-right">
        <button className="navbar-btn">
          <SearchIcon fontSize="small" />
        </button>
        <button className="navbar-btn outlined">Free trial</button>
        <button className="navbar-btn">Log in</button>
        <button className="navbar-btn">Cart</button>
      </div>

      <div className="navbar-right-mobile">
        <button className="navbar-btn">Log in</button>
      </div>
    </div>
  )
}

export default Navbar;