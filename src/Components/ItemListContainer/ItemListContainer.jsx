import { getProducts  } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router";
//borrar despues
//import { getProducts,getProductById,addProduct, deleteProductById,setproductbyid } from "../../data/api.js";

const ItemListContainer = ({bienvenida,despedida,bienvenido}) => {   

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        
        setLoading(true);

        getProducts()
            .then((response)=>{
                if(category){
                    const filteredProducts = response.filter( (product)=> 
                     product.category === category)
                    setProducts(filteredProducts);
                }
                else {
                    setProducts(response);
                }
            })
            .catch((error)=>{console.log(error);})
            .finally(()=>{setLoading(false);})
    },[category]);

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
