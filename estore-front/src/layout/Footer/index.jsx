import React from 'react'
import "./index.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <div className='footer_content'>
            <div className='footer_logo'>
              <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className='quick'>
              <h4>Quick Links</h4>
              <ul>
                <li>About</li>
                <li>Offers & Discounts</li>
                <li>Get Coupon</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='quick'>
              <h4>Quick Links</h4>
              <ul>
                <li>About</li>
                <li>Offers & Discounts</li>
                <li>Get Coupon</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='quick'>
              <h4>Quick Links</h4>
              <ul>
                <li>About</li>
                <li>Offers & Discounts</li>
                <li>Get Coupon</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='copyright'>
            <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
            <div className='footer_icons'>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-behance"></i>
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer