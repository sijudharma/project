import React from 'react'

const Navicon = () => {

    const mobile_icon = {
        position : 'absolute',
        zIndex : '3',
        right : '50px',
        top : '15px',
    };
    const bar = {
        width : '35px',
        height : '6px',
        background : "#fff",
        margin : '5px 0',
        borderRadius : '4px'
    };
    return (        
           <div style = {mobile_icon}>
               <div style = {bar}></div>
               <div style = {bar}></div>
               <div style = {bar}></div>
           </div>        
    )
}

export default Navicon

