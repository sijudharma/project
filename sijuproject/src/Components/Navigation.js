import React from 'react'

const Navigation = (props) => {
  const navigation_bar = {   
    background: '#ffcb9a',
    width: '100%',
    height: '50px',
    fontsize:'5rem',
    fontweight: 'bold',
    textAlign: 'right',
    margin: '0 auto',
    padding: '30px',
    marginTop: '5px',    
         
  }
  const link = {
    textDecoration:'none',
    color:'black',
    margin:'15px 0',
    fontFamily: 'Source Sans Pro, sans-serif'
  }
    return (
        <div style={navigation_bar}>
            <a href="#Company" style={link} title="Company">Company  </a>{"     "}            
            <a href="#Clients" style={link} title="Clients">Clients  </a>{"     "}
            <a href="#Contact" style={link} title="Contact">Contact Us  </a>{"     "}
            </div>
    )
}

export default Navigation
