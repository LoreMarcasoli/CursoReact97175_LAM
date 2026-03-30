import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const ItemDetail = ({product}) => {   

       const { addProduct} = useContext(CartContext);   
          
       const addtocart = (count)=>{
              console.log({... product, quantity:count});
              const newProduct = {... product, quantity:count};
              addProduct(newProduct);
       }

       return (
       <div className="itemdetail">
              <img src={product.Image} alt="" />
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>U$S {product.precio}</p>
              <ItemCount stock = {product.stock} addtocart={addtocart}  />

       </div>
       );
};

export default ItemDetail;  
