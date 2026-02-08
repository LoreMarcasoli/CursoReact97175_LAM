import "./titulo.css";
//import banner from "../../img/banner.jpg";
import banner from "../../../public/image/react-banner.png";

const Titulo = () => {

  return (
    <div className="titulo">
      <img className="titulo-banner" src={banner} alt="" />
      <h2 className="titulo-h2" >Bienvenidos al curso de React!</h2>
    </div>
  )
};

export default Titulo;