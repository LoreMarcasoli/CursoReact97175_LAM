import { createContext,useState } from "react";

const CartContext = createContext (null);

const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState([]);

    const addProduct = (newProduct) => {
        setCart ([...cart, newProduct]);
    }

    console.log(cart);

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=>total + productCart.quantity,0);
        return quantity;
    }

    return (
        <CartContext.Provider value = {{cart,addProduct,totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext }