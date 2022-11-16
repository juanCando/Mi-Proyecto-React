import React, {useState} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Item from '../Item/Item'
import LifeCycle from '../LifeCycle/LifeCycle'
import "./Contador.css"

const Contador = ({data}) => {
  const [Contador, Contadorgg] = useState(0) 
  const add = () => {
      Contadorgg (Contador +1)
  }
  const less = () =>{
      if (Contador >= 1){
        Contadorgg (Contador -1)

      }
  }
    
  return (
    <div className='box-contador'>
      <div className='box-button'>
        {/* <LifeCycle valorcontador={Contador}></LifeCycle> */}
        <h2>{Contador}</h2>
       <button className='boton' onClick={add} >agregar</button> 
        <button className='boton' onClick={less}>quitar</button> 
      </div>
    </div>
  )
}

export default Contador