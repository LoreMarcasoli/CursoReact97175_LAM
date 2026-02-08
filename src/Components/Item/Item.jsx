import "./item.css";

const Item = ({product}) => {   
    return (
         <li className="item">

            <div className="img-item-container">
                <img className="img-item" src={product.Image} alt="" />
            </div>

            <div className="text-item">
                <p className="title-item">{product.name}</p>
                <p className="price-item">U$S {product.precio}</p>
                <div className="button-item"> MÁS INFORMACIÓN </div>

            </div>
        </li>
    )
};

export default Item;  
