import React from 'react'
import Image from '../assets/fb.png'
import Image1 from '../assets/insta.png'
import Image2 from '../assets/twitter.png'

const Footer = () => {
    const footerstyle = {
        background: '#2c3531',
        fontSize: '.9rem',
        textAlign: 'center',
        padding: '25px',
        color: 'white'
    };
    const social_icons = {
        float: 'left',
                    
    }
    return (
        <div style={footerstyle}>
          &copy; 2021 Siju Dharmadevan 
          <div style={social_icons}>
        <img src={Image} alt="BgImage"/>            
        <img src={Image1} alt="BgImage1"/>
        <img src={Image2} alt="BgImage2"/>
        </div>           
        </div>
        
    )
}

export default Footer
