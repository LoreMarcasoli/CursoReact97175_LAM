import {LuShoppingCart} from 'react-icons/lu';
import "./cartwidget.css";
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';

const CartWidget= () => {   

    const {totalQuantity} = useContext (CartContext);
    console.log ('hola');
    console.log (totalQuantity());
    
    return (
        <> {totalQuantity()} </>
    )
};

export default CartWidget;


