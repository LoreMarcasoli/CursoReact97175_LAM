import { getProducts  } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
//borrar despues
//import { getProducts,getProductById,addProduct, deleteProductById,setproductbyid } from "../../data/api.js";

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
        {/*<button onClick={bienvenido}>Saludar</button>}*/}
        
                {
            loading === true ? <div>Cargando...</div> : <ItemList products={products}/>
        }

        <h2>{despedida}</h2>            
        
    </div>


    );
    
};

export default ItemListContainer;  
