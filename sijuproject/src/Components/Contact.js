import React from 'react'
import Image1 from '../assets/canada.png'

const Contact = () => {
    const contactstyle = {
        width: '100%',
        minHeigth: '700px',
        background: '#116466',
        marginTop: '-5px',
        padding: '10px'
    }
    const contactheadingstyle = {
        width: '100%',                
        background: '#2c3531',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        paddingLeft: '25px',
        fontColor: '#fff',
        color: 'white',
        fontSize: '1.5rem',
        padding:'8px',
    }
    const boxstyle = {
        fontSize: '0.5rem',
        width: '100%',               
        margin: '0 auto',       
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '15px',
        fontWeight: '700',
        background: '#d9b08c',
        marginTop:'3px'
    };    
    const constyle = {       
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        padding: '15px'       
    }
    const contaddress = {
        padding: '10px',
        textAlign: 'center',        
        color: 'black',
        fontSize: '15px',        
    }  
    
    return (
        <div style={contactstyle}>
        <h1 style={contactheadingstyle}>Contact</h1>        
        <div style={boxstyle}>  
        <div style={constyle}>         
            <img src={Image1} alt="canada"/>
            </div>
            <div style={contaddress}>
            <h1>Canada</h1>            
            <p>711-2887</p> 
            <p>Null street</p>
            <p>Email: contact@mobzillion.com</p>
            <p>Phone: +1 000 000 0000</p>                     
            </div>                                    
            </div>
    </div>
    )
}

export default Contact
