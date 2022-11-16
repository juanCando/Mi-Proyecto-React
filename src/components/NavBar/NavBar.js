import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="menu-navbar-container">
        <h1 className="menu-title">Mateolis</h1>
        <ul className="menu-items">
            <li>
                <a href="" className="menu-list">mates</a>
            </li>
            <li>
                <a href="" className="menu-list">termos</a>
            </li>
            <li>
                <a href="" className="menu-list">accesorios</a>
            </li>
        </ul>
        

        <CartWidget></CartWidget>
        
    </div>
  )
}

export default NavBar