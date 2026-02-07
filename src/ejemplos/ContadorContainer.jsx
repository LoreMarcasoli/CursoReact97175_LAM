import { useState, useEffect } from "react";
import Contador from "./Contador";
import Titulo from "./Titulo/Titulo";

const ContadorContainer = () => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect(() => {
    console.log("1er useEffect");
  }, []);

  //se ejecuta cada vez que cambia el estado del contador
  //ej: actualizar el título del documento con el valor del contador
  useEffect(() => {
    console.log("2do useEffect");
  }, [contador]);

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado del componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
    useEffect(() => {
    console.log("3er useEffect");
  });

  const aumentar = () => {
    setContador((prevState) => prevState + 1);
  };

  const alternarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Contador contador={contador} aumentar={aumentar} />
      <div>
        <p>Valor Booleano: {toggle.toString()}</p>
        <button onClick={alternarToggle} >Alternar valor toggle</button>
        {
          toggle === true && <Titulo />
        }
      </div>
    </div>
  )
}

export default ContadorContainer