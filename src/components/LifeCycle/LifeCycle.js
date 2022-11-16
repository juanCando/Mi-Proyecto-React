import React, { useEffect } from 'react'

const LifeCycle = ({valorcontador}) => {
  
    // useEffect(() => {
    //     console.log("estoy adentro del useefect")
    //   },[])

    
    //   useEffect(() => {
    //       console.log("estoy adentro del useefect pero ahora con corchetes")       
    //   },[valorcontador])

    //   useEffect(() => {
    //     return () =>{
    //         console.log("yo me muestro cuando el componente se va a desmontar");
    //     }       
    //   },[])

      return(
        <>
            <h2>{valorcontador}</h2>
        </>
      )
}

export default LifeCycle
