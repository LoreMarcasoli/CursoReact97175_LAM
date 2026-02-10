const ItemDetail = ({product}) => {   

return (
     <div className="itemdetail">
            <img src={product.Image} alt="" />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>U$S {product.precio}</p>

     </div>
 );
};

export default ItemDetail;  
