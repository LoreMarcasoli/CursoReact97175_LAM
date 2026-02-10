
import { useState, useEffect } from "react";
import { getProductById } from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router";

const itemDetailContainer = () => {   

    const [product, setProduct] = useState({});
    const {id} = useParams(); 

    console.log("ID del producto obtenido de useParams:", id);

    useEffect(() => {
        getProductById(5)
            .then((data) => {
                console.log("Producto obtenido por ID Lore:", data);
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error al obtener el producto por ID:", error);
            });
    },[]);

    return (
         <div className="itemdetailcontainer">
            <ItemDetail product={product}/>
        </div>
    );
};

export default itemDetailContainer;  
