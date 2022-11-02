import React from 'react'
import logo from '../../assets/carro-de-la-compra.png'
import "./CartWidget.css"

export const CartWidget = () => {
  return (
    <div className='menu_navbar_logo'>
         <img className='menu-navbar__img' src={logo} alt="cart widget"/>
    </div> 
  )
}

export default CartWidget