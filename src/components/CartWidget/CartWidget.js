import React, {useState} from 'react'
import logo from '../../assets/carro-de-la-compra.png'
import Contador from '../Contador/Contador'
import "./CartWidget.css"

const CartWidget = ({Contador}) => {
  return (  
    
    <div className='menu_navbar_logo'>
         <img className='menu-navbar__img' src={logo} alt="cart widget"/>

    </div> 
  )
}



export default CartWidget


