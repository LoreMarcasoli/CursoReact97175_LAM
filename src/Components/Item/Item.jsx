import {Link} from "react-router";
import "./item.css";

const Item = ({product}) => {   
    return (
         <li className="item">

            <div className="img-item-container">
                <img className="img-item" src={product.Image} alt="" />
            </div>

            <div className="text-item">
                <p className="title-item">{product.name}</p>
                <p className="description-item">{product.category}</p>
                <p className="price-item">U$S {product.precio}</p>
                <Link to={`/detail/${product.id}`} className="button-item"> MÁS INFORMACIÓN </Link>

            </div>
        </li>
    )
};

export default Item;  
