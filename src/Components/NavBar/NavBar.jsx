import CartWidget from '../CartWidget/CartWidget';
import logo from "../../img/Logo_nuevo.PNG"

const Navbar = () => {   
    return (
        <nav className='nav'>
            
            <div className='nav-brand'>   
                <img className="logo" src={logo}  alt="Brand Logo" />
            </div>
            
            <ul>
                <li>Home</li>
                <li>Comprar</li>
                <li>Vender</li>
                <li>Alquilar</li>
                <li>Contacto</li>
            </ul>

           <CartWidget />

        </nav>
    );
    
};

export default Navbar;
