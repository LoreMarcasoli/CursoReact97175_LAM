import './App.css'
import Navbar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'


function App() {

  const bienvenido = () => {
    alert("Hola en que podemos ayudarlo" );
  }


  return (
    <div>
      <Navbar />
      <ItemListContainer bienvenida={"Bienvenidos a Bienes Raices Diqmar"} despedida={"Gracias por visitarnos"} bienvenido={bienvenido} />

    </div>

  )
}

export default App
