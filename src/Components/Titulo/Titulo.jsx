import "./Titulo.css";
import logo from "../../img/Logo_nuevo.PNG"

const Titulo = () => {   

    const styles = {
        backgroundColor: "red",
        color: "white",
        padding: "20px",
        boderRadius: "10px"
    };
 
    return (
        <>
            <h2 className="titulo-h2">Curso React</h2>
            <img className="titulo-logo" src={logo} alt="Logo Bienes Raices"/>
        </>
        
    )
};

export default Titulo;  
