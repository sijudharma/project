import React from 'react'
import Image from '../assets/aboutcompany.jpg'

const Company = () => {
    const companystyle = {
        width: '100%',
        minHeigth: '700px',
        background: "#116466",
        marginTop: '-5px',
        padding: '10px'
    };
    const headingstyle = {
        background: '#2c3531',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        paddingLeft: '25px',
        fontColor: '#fff',
        color: 'white',
        fontSize: '1.5rem',
        padding:'8px',
        
    };
    const boxstyle = {
        fontSize: '0.5rem',
        width: '100%',        
        margin: '0 auto',        
        border: '2px solid #333',
        borderRadius: '8px',
        padding: '15px',
        fontWeight: '700',
        background: '#d9b08c',
        marginTop:'3px'
    }; 
    const imgstyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        padding: '15px'
      }
    return (
        <div style={companystyle}>
            <h1 style={headingstyle}>About Company</h1>
            <div style={boxstyle}> 
            <div style={imgstyle}>          
            <img src={Image} alt="compImage"/>            
            </div>             
                <h1>The company starts its operation in 2012.Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.</h1>
            </div>
        </div>
    )
}

export default Company
