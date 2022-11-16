import React, { useEffect } from 'react'
import Contador from '../Contador/Contador'
import "./Item.css"

const Item = ({producto,valorcontador}) => {
  
  return (
    <div className="box_Item">
        <img className="img_Item" alt={producto.nombre} src={`img/${producto.img}.jpg`} />
        <div className="box_name">
        <h4>nombre: <h5>{producto.nombre}</h5></h4>
        <h4>material: <h5>{producto.material}</h5></h4>
        <h4>agregar al carrito</h4>
        <h4>{valorcontador}</h4>
        <Contador data={"button_agregar"}></Contador>
        </div>
    </div>
  )
}


export default Item


    