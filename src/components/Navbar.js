import React from 'react'
import './Styles.css'
export const Navbar = () => {
  return (
    <div className='navbar' >
        <div>
        <h1>
            <span style={{color:'blue'}} >Medi</span>
            <span style={{color :'orange' }} >Care+</span>
        </h1>
        </div>
        <div className='headings' >
            <h3 style={{padding : '0.7rem'}} >Home</h3>
            <h3 style={{padding : '0.7rem'}} >About</h3>
            <h3 style={{padding : '0.7rem'}} >Services</h3>
            <h3 style={{padding : '0.7rem'}} >News</h3>
            <h3 style={{backgroundColor : 'blue',color :'aliceblue' ,padding : '0.7rem', borderRadius : '20px'}} >Contact</h3>
        </div>
    </div>
  )
}
