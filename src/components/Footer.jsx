import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <h4 className='appName'>ClimateCast</h4>
        <p>A weather app that provides accurate and up-to-date weather
        information for users.</p>
        <div className="socials">
            <button className='icon'><FaFacebookF /></button>
            <button className='icon'><FaTwitter /></button>
            <button className='icon'><FaInstagram /></button>
            <button className='icon'><FaLinkedinIn /></button>
        </div>
        <p>©2024 ClimateCast, All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer;
