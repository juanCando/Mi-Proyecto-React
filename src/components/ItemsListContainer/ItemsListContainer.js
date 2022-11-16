import "./ItemsListContainer.css"
import  data  from "../../data/data"
import { useEffect, useState}  from "react"
import ItemList from "../ItemList/ItemList";

const ItemsListContainer = (props) => {
  const[porductList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    },2000)
  })

  useEffect (() => {
    getProducts.then(respuesta => {
      setProductList(respuesta)
      console.log(porductList)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <div className="message-greeting-container">
        <h2 className="message"><ItemList porductList={porductList}/></h2>
    </div>
  )
}

export default ItemsListContainer