import CartWidget from '../CartWidget/CartWidget';
import logo from "../../../public/image/Logo_nuevo.PNG";
import {Link,NavLink} from "react-router";
import "./navbar.css";

const Navbar = () => {   
    return (
        <nav className='navbar'>
            
            <NavLink to="/">   
                <img className="logo" src={logo}  alt="Brand Logo" />
            </NavLink>
            
            <ul className='categories'>
                <NavLink to="/category/Compra" className='category'>Compra</NavLink>
                <NavLink to="/category/Vende" className='category'>Vende</NavLink>
                <NavLink to="/category/Alquila" className='category'>Alquila</NavLink>
                <NavLink to="/category/Contacto" className='category'>Contacto</NavLink>

            </ul>

           <CartWidget />

        </nav>
    );
    
};

export default Navbar;
