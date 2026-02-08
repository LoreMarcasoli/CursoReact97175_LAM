import { getProducts  } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({bienvenida,despedida,bienvenido}) => {   

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        getProducts()
            .then((response)=>{setProducts(response);})
            .catch((error)=>{console.log(error);})
            .finally(()=>{setLoading(false);})
    },[]);

    return (
           
    <div >   
        <h2>{bienvenida}</h2>
        <button onClick={bienvenido}>Saludar</button>
        <h2>{despedida}</h2>            
        
        {
            loading === true ? <div>Cargando...</div> : <ItemList products={products}/>
        }
    </div>


    );
    
};

export default ItemListContainer;  
