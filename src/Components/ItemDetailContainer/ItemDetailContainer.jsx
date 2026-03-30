
import { useState, useEffect } from "react";
import { getProductById } from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router";

const itemDetailContainer = () => {   

    const [product, setProduct] = useState({});
    const{productid} = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
            setLoading(true);
            getProductById(productid)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {console.error("Error al obtener el producto por ID:", error);})
            .finally(()=>{setLoading(false);});
    },[productid]);

    return (
         <div className="itemdetailcontainer">
            
          {
            loading === true ? <div>Cargando...</div> : <ItemDetail product={product}/>
          }



        </div>
    );
};

export default itemDetailContainer;  
