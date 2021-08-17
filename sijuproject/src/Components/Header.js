import React from 'react'
import Image from '../assets/fb.png'
import Image1 from '../assets/insta.png'
import Image2 from '../assets/twitter.png'
import Image3 from '../assets/logo1.png'

const Header = () => {    
    const bg_image = {        
        padding: '70px',
        textAlign: 'center',
        background: '#008DAB',
        color: 'white',
        fontSize: '25px'
        } 
        const social_icons = {
            float: 'right',            
        }
        const logo_icons = {
            float: 'left',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            height: '100%'
        }

    return (
        <div style={bg_image}>
            <div style={logo_icons}>
            <img src={Image3} alt="icon3"/> 
            </div>
            <h1>Mobzillion</h1>
            <div style={social_icons}>
            <img src={Image} alt="icon1"/>            
            <img src={Image1} alt="icon2"/>
            <img src={Image2} alt="icon3"/>
            </div>
            </div>
    )
}

export default Header
