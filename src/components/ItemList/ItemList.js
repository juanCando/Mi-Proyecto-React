import "./ItemList.css"
import Item from "../Item/Item"


  const ItemList = ({porductList}) => {
  return (
    <div className="box-padre">
        {porductList.map((product) => (
            <Item key={product.id} producto={product} />

                )
            )
        }
    </div>
  )
}

export default ItemList