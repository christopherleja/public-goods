import React from 'react'
import '../css/Footer.css'
import PinterestIcon from '@material-ui/icons/Pinterest'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="footer-top-level">
        <div className="connect-box">
          <h6 className="connect-headline">Connect with us</h6>
          <form className="connect-form">
            <input className="connect-input" type="text" placeholder="Enter your email" />
            <input type="submit" className="connect-subscribe" value="Subscribe" />
          </form>
          <div className="fine-print-container">
            <p className="connect-fine-print">
              By clicking Sign Up you agree to recieve marketing emails from PUBLIC GOODS
            </p>
          </div>
        </div>


        <div className="icon-links">
          <a href="#" className="icon">
            <PinterestIcon />
          </a>
          <a href="#" className="icon">
            <FacebookIcon />
          </a>
          <a href="#" className="icon">
            <TwitterIcon />
          </a>
          <a href="#" className="icon">
            <InstagramIcon />
          </a>
        </div>
      </div>

    <div className="connect-second-level">

      <div className="detail-links">
        <button className="detail-btn" name="Contact">Contact</button>
        <button className="detail-btn" name="Shipping">Shipping</button>
        <button className="detail-btn" name="Privacy Policy">Privacy Policy</button>
        <button className="detail-btn" name="Terms and Service">Terms and Service</button>
      </div>

      <div className="copyright-container">
        <p className="copyright">
          ©2017 PUBLIC GOODS - All Rights Reserved
        </p> 
      </div>
    </div>
    </div>
  )
}

export default Footer
