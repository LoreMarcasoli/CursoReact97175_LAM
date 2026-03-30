import { useState } from 'react'

const ItemCount = ({stock,addtocart}) => {

    const [count,setCount] = useState(1);

    const restar = () =>{
        if (count> 1) {
            setCount(count -1);
        }
    }

    const sumar = () =>{
        if (count < stock) {
            setCount(count +1);
        }
    }    

    return(
        <div>
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>

            <button onClick={ () =>addtocart(count)} >Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount